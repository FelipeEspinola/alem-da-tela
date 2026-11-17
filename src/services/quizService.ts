import { lerJSON, gravarJSON } from './storage';
import { PERGUNTAS, OPCOES, faixaPara, Faixa } from '../data/quiz';

export type Resultado = { pontos: number; faixa: Faixa };

export function calcular(respostas: number[]): Resultado {
  const pontos = respostas.reduce((soma, i) => soma + (OPCOES[i]?.peso ?? 0), 0);
  return { pontos, faixa: faixaPara(pontos) };
}

// Apenas contadores agregados e anônimos (base do relatório RF28). As respostas NÃO são gravadas.
const CHAVE = 'adt:quiz:contadores';
export async function registrarConclusao(faixaId: string): Promise<void> {
  const c = await lerJSON<Record<string, number>>(CHAVE, {});
  c.total = (c.total ?? 0) + 1;
  c[faixaId] = (c[faixaId] ?? 0) + 1;
  await gravarJSON(CHAVE, c);
}
export const totalPerguntas = PERGUNTAS.length;
