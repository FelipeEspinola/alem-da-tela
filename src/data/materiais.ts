// Acervo inicial. Só itens cujo link apareceu em fonte consultada. Não há vídeos verificados ainda.
export type Material = {
  id: string; titulo: string; descricao: string; tipo: 'Guia' | 'Manual de orientação'; publico: string[];
  tema: 'Uso consciente de telas' | 'Saúde e desenvolvimento'; fonte: string; data: string; formato: 'PDF' | 'Página';
  link: string; observacao?: string; verificadoEm: string;
};
const V = '2026-10-26';
export const MATERIAIS: Material[] = [
  { id: 'guia-secom-2025', titulo: 'Crianças, Adolescentes e Telas: Guia sobre Uso de Dispositivos Digitais',
    descricao: 'Guia do Governo Federal, feito com cooperação da UNESCO, com orientações para famílias, educadores e plataformas. Entre as orientações noticiadas: telas só a partir dos 2 anos (exceto videochamadas com familiares), sem smartphone próprio antes dos 12 anos e acompanhamento de adultos entre 12 e 17 anos.',
    tipo: 'Guia', publico: ['Pais e responsáveis', 'Educadores'], tema: 'Uso consciente de telas', fonte: 'Secom / Governo Federal, com UNESCO', data: '2025', formato: 'PDF',
    link: 'https://diadainternetsegura.org.br/wp-content/uploads/2025/04/guia-de-telas_comprimido.pdf',
    observacao: 'Cópia hospedada pelo Dia da Internet Segura; confira também no portal do governo federal.', verificadoEm: V },
  { id: 'sbp-menostelas-2019', titulo: 'Manual de Orientação #MenosTelas #MaisSaúde',
    descricao: 'Manual da Sociedade Brasileira de Pediatria com recomendações para pais, educadores e profissionais sobre o uso de telas por faixa etária. Segundo a SBP, a ideia não é demonizar o mundo digital, mas usá-lo com cuidado e supervisão.',
    tipo: 'Manual de orientação', publico: ['Pais e responsáveis', 'Educadores', 'Profissionais de saúde'], tema: 'Saúde e desenvolvimento', fonte: 'Sociedade Brasileira de Pediatria (SBP)', data: '2019 (divulgado em 11/02/2020)', formato: 'PDF',
    link: 'https://www.sbp.com.br/fileadmin/user_upload/_22246c-ManOrient_-__MenosTelas__MaisSaude.pdf', observacao: 'Edição de 2019; existe atualização de 2024 (item abaixo).', verificadoEm: V },
  { id: 'sbp-menostelas-2024', titulo: '#MenosTelas #MaisSaúde: atualização 2024',
    descricao: 'Atualização do manual da SBP pelo Grupo de Trabalho Saúde na Era Digital (gestão 2022-2024). Prefira esta edição quando houver diferença em relação à de 2019.',
    tipo: 'Manual de orientação', publico: ['Pais e responsáveis', 'Educadores', 'Profissionais de saúde'], tema: 'Saúde e desenvolvimento', fonte: 'SBP, via Portal de Boas Práticas (Fiocruz/IFF)', data: '2024', formato: 'Página',
    link: 'https://portaldeboaspraticas.iff.fiocruz.br/biblioteca/menos-telas-mais-saude-atualizacao-2024/', observacao: 'Página do portal com o PDF para visualizar ou baixar.', verificadoEm: V },
];
