import { lerJSON, gravarJSON } from './storage';

// MODO DEMONSTRAÇÃO: sem servidor, as mensagens e inscrições ficam gravadas apenas neste aparelho
// e não são enviadas a ninguém. Em produção, estas funções chamariam a API.
export const TIPOS_CONTATO = ['Contato', 'Sugestão de conteúdo'] as const;
export type Contato = { tipo: string; mensagem: string; email: string };
export type Erros = Partial<Record<'tipo' | 'mensagem' | 'email', string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const emailValido = (e: string) => EMAIL.test(e.trim());

export function validarContato(c: Contato): Erros {
  const erros: Erros = {};
  if (!TIPOS_CONTATO.includes(c.tipo as any)) erros.tipo = 'Escolha o tipo da mensagem.';
  const m = c.mensagem.trim();
  if (m.length < 10) erros.mensagem = 'Escreva pelo menos 10 caracteres.';
  else if (m.length > 1000) erros.mensagem = 'Use no máximo 1000 caracteres.';
  if (c.email.trim() && !emailValido(c.email)) erros.email = 'Esse e-mail parece incompleto. Confira ou deixe em branco.';
  return erros;
}
export function validarInscricao(email: string, consentimento: boolean): { email?: string; consentimento?: string } {
  const erros: { email?: string; consentimento?: string } = {};
  if (!emailValido(email)) erros.email = 'Informe um e-mail válido.';
  if (!consentimento) erros.consentimento = 'Marque a caixa para autorizar o recebimento.';
  return erros;
}

export async function registrarContato(c: Contato): Promise<boolean> {
  const lista = await lerJSON<Contato[]>('adt:contatos', []);
  lista.push({ tipo: c.tipo, mensagem: c.mensagem.trim(), email: c.email.trim() });
  return gravarJSON('adt:contatos', lista);
}
export async function inscreverNewsletter(email: string): Promise<boolean> {
  const lista = await lerJSON<string[]>('adt:newsletter', []);
  const e = email.trim().toLowerCase();
  if (!lista.includes(e)) lista.push(e);
  return gravarJSON('adt:newsletter', lista);
}
export async function cancelarNewsletter(email: string): Promise<boolean> {
  const lista = await lerJSON<string[]>('adt:newsletter', []);
  return gravarJSON('adt:newsletter', lista.filter((x) => x !== email.trim().toLowerCase()));
}

export type Alvo = 'whatsapp' | 'email' | 'facebook' | 'x';
export function linkCompartilhar(alvo: Alvo, titulo: string, url: string): string {
  const t = encodeURIComponent(titulo), u = encodeURIComponent(url);
  switch (alvo) {
    case 'whatsapp': return `https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`.trim())}`;
    case 'email': return `mailto:?subject=${t}&body=${encodeURIComponent(`${titulo}\n${url}`.trim())}`;
    case 'facebook': return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
    case 'x': return `https://twitter.com/intent/tweet?text=${t}&url=${u}`;
  }
}
