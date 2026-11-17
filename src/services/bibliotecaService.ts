import { MATERIAIS, Material } from '../data/materiais';

export type FiltrosBib = { busca: string; publico: string | null; tipo: string | null; tema: string | null };
const sem = (t: string) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function filtrarMateriais(lista: Material[], f: FiltrosBib): Material[] {
  const q = sem(f.busca.trim());
  return lista.filter((m) =>
    (!f.publico || m.publico.includes(f.publico)) && (!f.tipo || m.tipo === f.tipo) && (!f.tema || m.tema === f.tema) &&
    (!q || sem(`${m.titulo} ${m.descricao} ${m.fonte}`).includes(q)));
}
export async function listarMateriais(f: FiltrosBib): Promise<Material[]> {
  return filtrarMateriais(MATERIAIS, f);
}
