import { NORMAS, Norma } from '../data/normas';

export type Filtros = { busca: string; esfera: string | null; tipo: string | null; tema: string | null };
const sem = (t: string) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function filtrar(lista: Norma[], f: Filtros): Norma[] {
  const q = sem(f.busca.trim());
  return lista.filter((n) =>
    (!f.esfera || n.esfera === f.esfera) && (!f.tipo || n.tipo === f.tipo) && (!f.tema || n.tema === f.tema) &&
    (!q || sem(`${n.titulo} ${n.numero} ${n.resumo} ${n.orgao}`).includes(q)));
}
// Assíncrono de propósito: a tela já trata carregamento/erro e a troca por uma API real não a altera.
export async function listarNormas(f: Filtros): Promise<Norma[]> {
  return filtrar(NORMAS, f);
}
