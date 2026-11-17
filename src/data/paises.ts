// Comparação internacional. Todas as informações vêm de fontes SECUNDÁRIAS (imprensa); nenhuma foi conferida em texto oficial.
// Campos ausentes ficam como 'a verificar'. Não há afirmação de resultados porque não encontramos avaliações verificadas.
export type Pais = {
  id: string; pais: string; ambito: 'Dentro da escola' | 'Redes sociais (fora da escola)'; politica: string;
  aplicacao: string; dataRef: string; observacoes: string; fonte: string; link: string; verificadoEm: string;
};
const V = '2026-10-26';
export const PAISES: Pais[] = [
  { id: 'franca', pais: 'França', ambito: 'Dentro da escola',
    politica: 'Lei de 2018 proíbe celulares e outros aparelhos conectados para alunos até cerca de 15 anos (etapas anteriores ao ensino médio); no ensino médio, cada escola decide. Em 2024 começou um teste chamado "pausa digital", em que os alunos entregam o celular ao chegar.',
    aplicacao: 'Escolas de ensino fundamental e colégios (alunos de 11 a 15 anos no teste). Aplicação definida por cada escola (armários, aparelhos desligados).',
    dataRef: 'Lei de 2018; teste a partir de setembro de 2024', observacoes: 'Reportagens indicam que a regra de 2018 era pouco cumprida, o que motivou o teste. Situação atual da "pausa digital" e número da lei: a verificar.',
    fonte: 'MobileTime (03/09/2024), Tecnoblog', link: 'https://www.mobiletime.com.br/noticias/03/09/2024/franca-proibe-entrada-celulares-escolas/', verificadoEm: V },
  { id: 'finlandia', pais: 'Finlândia', ambito: 'Dentro da escola',
    politica: 'Lei aprovada pelo Parlamento em 2025 limita o uso de celulares durante as aulas a fins educacionais ou de saúde, com autorização do professor. Professores podem recolher o aparelho quando necessário.',
    aplicacao: 'Escolas de ensino fundamental e médio, durante as aulas (segundo a reportagem consultada).',
    dataRef: 'Aprovada em abril/2025; vigência a partir de agosto/2025', observacoes: 'O foco informado é o horário de aula, não necessariamente recreios e intervalos. Número da lei e texto oficial: a verificar.',
    fonte: 'Xataka Móvil e Noticias NQN (2025)', link: 'https://www.xatakamovil.com/movil-y-sociedad/pais-feliz-mundo-ha-tomado-decision-historica-para-seguir-siendolo-acabar-moviles-escuelas/amp', verificadoEm: V },
  { id: 'holanda', pais: 'Holanda', ambito: 'Dentro da escola',
    politica: 'Em 2023 o governo anunciou a proibição de celulares, tablets e relógios inteligentes nas salas de aula a partir de 2024, com exceções para necessidades médicas, deficiências e aulas de habilidades digitais.',
    aplicacao: 'Salas de aula; as escolas definem as regras detalhadas com professores, pais e alunos.',
    dataRef: 'Anunciada em julho/2023; vigência a partir de 2024', observacoes: 'Na época, a medida não previa punições legais, e o governo pretendia avaliá-la ao fim do ano letivo 2024-2025. O resultado dessa avaliação e a situação atual: a verificar.',
    fonte: 'BBC News, reproduzida no Correio Braziliense (06/07/2023)', link: 'https://www.correiobraziliense.com.br/mundo/2023/07/5107140-os-paises-europeus-que-estao-banindo-celulares-em-sala-de-aula.html', verificadoEm: V },
  { id: 'australia', pais: 'Austrália', ambito: 'Redes sociais (fora da escola)',
    politica: 'Desde 10/12/2025, plataformas como Facebook, Instagram, TikTok, YouTube e Snapchat precisam impedir contas de menores de 16 anos, com multas de até 49,5 milhões de dólares australianos. Crianças e responsáveis não são punidos.',
    aplicacao: 'Plataformas de redes sociais (com exceções como YouTube Kids, Google Classroom e WhatsApp, segundo a imprensa). Não trata de celulares nas escolas.',
    dataRef: 'Em vigor desde 10/12/2025', observacoes: 'É uma regra sobre redes sociais, diferente das proibições escolares dos outros países. Regras para celulares em escolas australianas (definidas por estado): a verificar. Houve críticas de empresas de tecnologia e de defensores da liberdade de expressão.',
    fonte: 'CNN Brasil e Estadão Conteúdo (dezembro/2025)', link: 'https://www.cnnbrasil.com.br/tecnologia/entenda-por-que-a-australia-decidiu-restringir-redes-sociais-para-jovens/', verificadoEm: V },
];
export const LICOES = [
  'As medidas não são equivalentes: algumas valem só na sala de aula, outras no dia escolar inteiro e outra trata de redes sociais.',
  'Em vários casos, cada escola decide como aplicar (armários, aparelhos desligados, autorização do professor).',
  'Há exceções recorrentes para saúde, deficiência e uso pedagógico.',
  'Sobre resultados: não encontramos avaliações verificadas de efeitos para citar, então o site não afirma nenhum.',
];
export const NAO_VERIFICADOS = 'Itália, Portugal, Espanha, Canadá, México e Dinamarca aparecem na apresentação do projeto, mas ainda não foram verificados.';
