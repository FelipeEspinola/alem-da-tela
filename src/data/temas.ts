// Conteúdo "Por que se preocupar?". Cada bloco é rotulado pelo tipo de afirmação:
// recomendacao (entidade orienta), pesquisa (resultado de estudo/relatório), associacao (correlação, não prova causa), incerto, relato (percepção, não estudo controlado).
export type Tipo = 'recomendacao' | 'pesquisa' | 'associacao' | 'incerto' | 'relato';
export type Bloco = { tipo: Tipo; texto: string };
export type Fonte = { titulo: string; url: string; data: string };
export type Tema = { id: string; titulo: string; intro: string; blocos: Bloco[]; fazer: string[]; fontes: Fonte[]; verMais?: { slug: string; rotulo: string }[] };
export const ROTULOS: Record<Tipo, string> = { recomendacao: 'Recomendação', pesquisa: 'Pesquisa', associacao: 'Associação, não prova de causa', incerto: 'Ainda incerto', relato: 'Relato, não estudo' };

const SBP = { titulo: 'SBP: Manual #MenosTelas #MaisSaúde (2019)', url: 'https://www.sbp.com.br/fileadmin/user_upload/_22246c-ManOrient_-__MenosTelas__MaisSaude.pdf', data: '2019' };
const SG = { titulo: 'Surgeon General dos EUA: Social Media and Youth Mental Health (aviso oficial, em inglês)', url: 'https://www.hhs.gov/sites/default/files/sg-youth-mental-health-social-media-advisory.pdf', data: '23/05/2023' };

export const TEMAS: Tema[] = [
  { id: 'saude-fisica', titulo: 'Saúde física e sono',
    intro: 'Sono, visão, postura e movimento podem ser afetados quando as telas ocupam o lugar de dormir, brincar e se mexer. O que pesa é o quanto e quando se usa, e o que deixa de ser feito.',
    blocos: [
      { tipo: 'recomendacao', texto: 'A Sociedade Brasileira de Pediatria reúne, no manual #MenosTelas #MaisSaúde, orientações de tempo e uso de telas por faixa etária. Consulte a edição mais recente (2024) na Biblioteca.' },
      { tipo: 'associacao', texto: 'O aviso oficial do Surgeon General dos EUA (2023) liga o uso compulsivo e descontrolado de redes sociais a problemas de sono e de atenção em crianças e adolescentes. É uma associação observada em estudos, e não prova que a tela causa o problema.' },
      { tipo: 'incerto', texto: 'Visão, postura e sedentarismo fazem parte do mapa do projeto, mas ainda não incluímos fonte verificada específica para esses pontos.' },
    ],
    fazer: ['Combinar horários sem tela, como refeições e a hora de dormir.', 'Evitar deixar o celular no quarto durante a noite.', 'Propor brincadeiras e esportes que movimentem o corpo.'],
    fontes: [SBP, SG], verMais: [{ slug: 'biblioteca', rotulo: 'Manuais na Biblioteca' }, { slug: 'guia-pais', rotulo: 'Guia para pais' }] },
  { id: 'saude-mental', titulo: 'Saúde mental e bem-estar',
    intro: 'Redes sociais e jogos podem trazer acolhimento e criatividade, mas também comparação social, pressão e uso difícil de controlar. A pesquisa ainda está em andamento.',
    blocos: [
      { tipo: 'pesquisa', texto: 'O Surgeon General dos EUA afirmou em 2023 que não há evidência suficiente para dizer que as redes sociais são seguras para crianças e adolescentes, e que há evidência crescente de associação com prejuízos à saúde mental. O mesmo aviso reconhece benefícios: sentir-se aceito, receber apoio e se expressar.' },
      { tipo: 'associacao', texto: 'Segundo o aviso, adolescentes que passam mais de três horas por dia em redes sociais têm cerca do dobro do risco de sintomas de depressão e ansiedade. Isso é uma associação nos estudos citados, nos EUA; não significa que três horas causem o problema, nem que o resultado valha igual para toda criança.' },
      { tipo: 'incerto', texto: 'Os próprios autores pedem mais pesquisa sobre quais conteúdos fazem mais mal, quais fatores protegem e como o uso pode ser benéfico.' },
    ],
    fazer: ['Conversar sobre o que a criança vê e sente online, sem julgar.', 'Observar mudanças de humor, sono e isolamento por semanas.', 'Se houver sofrimento, buscar um profissional (veja Ajuda e apoio).'],
    fontes: [SG], verMais: [{ slug: 'ajuda', rotulo: 'Ajuda e apoio' }, { slug: 'quiz', rotulo: 'Fazer o quiz' }] },
  { id: 'atencao', titulo: 'Atenção, concentração e aprendizagem',
    intro: 'O celular por perto pode competir com a tarefa. A discussão é sobre uso sem propósito pedagógico, e não sobre banir toda tecnologia da escola.',
    blocos: [
      { tipo: 'pesquisa', texto: 'O Relatório Global de Monitoramento da Educação 2023, da UNESCO, concluiu que notificações e a simples proximidade do celular podem distrair os alunos, e cita uma meta-análise em 14 países em que o uso do celular teve efeito negativo na aprendizagem. A imprensa também reportou um estudo citado no relatório, segundo o qual pode levar até 20 minutos para voltar a se concentrar depois de um uso não escolar.' },
      { tipo: 'incerto', texto: 'O relatório faz uma ressalva: banir a tecnologia pode ser legítimo quando ela não melhora a aprendizagem ou piora o bem-estar, mas o desafio é mais amplo e exige clareza sobre o papel de cada tecnologia na escola.' },
      { tipo: 'relato', texto: 'Um ano após a Lei 15.100, reportagem de 2026 diz que diretores relatam mais participação, concentração e socialização, e menos conflitos, e que o MEC afirma que 92% das escolas aplicam a lei. São percepções e dados do governo, não uma avaliação científica dos efeitos.' },
    ],
    fazer: ['Em casa, deixar o celular fora do local de estudo.', 'Na escola, usar o aparelho só quando houver objetivo pedagógico claro.', 'Combinar pausas e momentos de uso livre depois das tarefas.'],
    fontes: [{ titulo: 'Jornal Opção sobre o relatório GEM 2023 da UNESCO', url: 'https://www.jornalopcao.com.br/educacao/confira-a-lista-dos-paises-baniram-ou-exigem-rigido-controle-de-celular-em-sala-de-aula-512933/', data: '2023' },
      { titulo: 'Olhar Digital: UNESCO aponta riscos do uso excessivo de smartphones em sala de aula', url: 'https://olhardigital.com.br/2023/07/31/pro/unesco-quer-que-smartphones-sejam-banidos-de-salas-de-aula/', data: '31/07/2023' },
      { titulo: 'O Liberal: Celular proibido, o que diretores relatam um ano depois', url: 'https://www.oliberal.com/variedades/celular-proibido-o-que-diretores-de-escolas-publicas-e-privadas-relatam-um-ano-depois-1.1139346', data: '2026' }],
    verMais: [{ slug: 'legislacao', rotulo: 'O que diz a lei' }, { slug: 'guia-educadores', rotulo: 'Guia para educadores' }] },
  { id: 'riscos-online', titulo: 'Riscos online: cyberbullying, conteúdo, dados e design que prende',
    intro: 'Crianças e adolescentes podem ser expostos a ofensas, conteúdos inadequados e coleta de seus dados. Conversar e saber onde pedir ajuda protege mais do que proibir.',
    blocos: [
      { tipo: 'pesquisa', texto: 'O aviso do Surgeon General dos EUA diz que crianças são expostas nas redes a conteúdo violento e sexual, a bullying e a assédio. O relatório GEM 2023 da UNESCO também destaca a preocupação com o uso de dados dos estudantes por empresas de tecnologia.' },
      { tipo: 'pesquisa', texto: 'O guia do Governo Federal (2025) explica que muitas plataformas ganham dinheiro com a atenção dos usuários e por isso usam recursos que estimulam o uso prolongado: notificações, curtidas, rolagem infinita, reprodução automática e recomendações por algoritmo. O guia chama isso de design manipulativo.' },
      { tipo: 'recomendacao', texto: 'No Brasil, o ECA Digital (Lei 15.211/2025), em vigor desde março de 2026, cria deveres para empresas de produtos digitais voltados a crianças e adolescentes. A SaferNet recebe denúncias anônimas de conteúdo criminoso na internet.' },
    ],
    fazer: ['Manter o diálogo aberto: a criança precisa sentir que pode contar sem ser punida.', 'Guardar prints antes de denunciar casos de ofensa ou exposição.', 'Usar os canais de denúncia e apoio listados em Ajuda e apoio.'],
    fontes: [SG, { titulo: 'Guia Secom 2025: Crianças, Adolescentes e Telas (pp. 29 a 35)', url: 'https://diadainternetsegura.org.br/wp-content/uploads/2025/04/guia-de-telas_comprimido.pdf', data: '2025' }, { titulo: 'Planalto: ECA Digital (Lei 15.211/2025)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm', data: '17/09/2025' }],
    verMais: [{ slug: 'ajuda', rotulo: 'Ajuda e apoio' }, { slug: 'legislacao', rotulo: 'Legislação' }] },
];
