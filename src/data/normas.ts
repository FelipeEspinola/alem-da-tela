// Catálogo inicial de normas. Cada registro indica COMO foi verificado.
// 'oficial' = texto lido no site oficial; 'secundaria' = confirmado só em fontes secundárias (conferir no texto oficial);
// 'a_verificar' = existência noticiada, dados incompletos. Nada aqui foi preenchido de memória.
export type Norma = {
  id: string; titulo: string; numero: string; orgao: string;
  esfera: 'Federal' | 'Estadual' | 'Municipal'; uf?: 'RJ'; tipo: 'Lei' | 'Decreto';
  tema: 'Celulares nas escolas' | 'Proteção de crianças e adolescentes online';
  resumo: string; abrangencia: string; publicacao: string | null; vigencia: string;
  verificadoEm: string; verificacao: 'oficial' | 'secundaria' | 'a_verificar'; fonte: string; link: string | null;
};
const V = '2026-10-26';
export const NORMAS: Norma[] = [
  { id: 'lei-15100-2025', titulo: 'Uso de aparelhos eletrônicos portáteis pessoais nas escolas', numero: 'Lei nº 15.100/2025', orgao: 'Presidência da República', esfera: 'Federal', tipo: 'Lei', tema: 'Celulares nas escolas',
    resumo: 'Proíbe o uso de celulares e outros aparelhos pessoais por estudantes durante a aula, o recreio e os intervalos, em toda a educação básica. Em sala de aula, o uso é permitido para fins estritamente pedagógicos, conforme orientação dos profissionais de educação. Há exceções para perigo, necessidade ou força maior, e uso permitido para acessibilidade, inclusão, condições de saúde e direitos fundamentais.',
    abrangencia: 'Escolas públicas e privadas da educação básica, em todo o país.', publicacao: '13/01/2025', vigencia: 'Em vigor (conferir alterações posteriores no site do Planalto).',
    verificadoEm: V, verificacao: 'oficial', fonte: 'Texto da lei no site do Planalto', link: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15100.htm' },
  { id: 'decreto-12385-2025', titulo: 'Regulamenta a Lei nº 15.100/2025', numero: 'Decreto nº 12.385/2025', orgao: 'Presidência da República', esfera: 'Federal', tipo: 'Decreto', tema: 'Celulares nas escolas',
    resumo: 'Detalha a aplicação da lei: prevê estratégias de orientação dos estudantes e formação de profissionais, participação da comunidade escolar na adequação das regras e documento de profissional de saúde para casos de tecnologia assistiva ou cuidado de condições de saúde, podendo os sistemas de ensino aceitar outras comprovações.',
    abrangencia: 'Redes de ensino e escolas da educação básica.', publicacao: '18/02/2025 (publicado no DOU em 19/02/2025)', vigencia: 'A confirmar no texto oficial.',
    verificadoEm: V, verificacao: 'secundaria', fonte: 'Agência Brasil e guia do IFPE; texto oficial ainda não conferido', link: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/Decreto/D12385.htm' },
  { id: 'lei-15211-2025', titulo: 'Estatuto Digital da Criança e do Adolescente (ECA Digital)', numero: 'Lei nº 15.211/2025', orgao: 'Presidência da República', esfera: 'Federal', tipo: 'Lei', tema: 'Proteção de crianças e adolescentes online',
    resumo: 'Cria regras de proteção para crianças e adolescentes em produtos e serviços digitais (redes sociais, aplicativos, jogos e outros), com deveres para as empresas, como mecanismos de verificação de idade em conteúdos restritos.',
    abrangencia: 'Produtos e serviços digitais direcionados a menores de 18 anos ou de provável acesso por eles.', publicacao: '17/09/2025', vigencia: 'Em vigor desde 17/03/2026.',
    verificadoEm: V, verificacao: 'secundaria', fonte: 'Notícia do TJRJ e outras fontes; texto oficial ainda não conferido', link: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm' },
  { id: 'lei-5222-2008-rj', titulo: 'Proíbe celulares e aparelhos eletrônicos nas salas de aula da rede estadual', numero: 'Lei Estadual nº 5.222/2008', orgao: 'Assembleia Legislativa do Estado do Rio de Janeiro', esfera: 'Estadual', uf: 'RJ', tipo: 'Lei', tema: 'Celulares nas escolas',
    resumo: 'Segundo a apresentação do projeto e a imprensa, proíbe o uso de celulares e outros aparelhos por alunos e professores da rede pública estadual, salvo autorização da escola para fins pedagógicos. A alteração pela Lei nº 5.453/2009 citada na apresentação ainda não foi confirmada.',
    abrangencia: 'Rede pública estadual do RJ. Não se estende automaticamente às redes municipais nem às escolas privadas.', publicacao: null, vigencia: 'A verificar, inclusive se foi alterada ou ajustada após a Lei federal nº 15.100/2025.',
    verificadoEm: V, verificacao: 'secundaria', fonte: 'Olhar Digital (2023) e apresentação do projeto; texto da ALERJ não conferido', link: null },
  { id: 'lei-4734-2008-rio', titulo: 'Proíbe celulares e equipamentos eletrônicos em sala de aula no Município do Rio', numero: 'Lei Municipal nº 4.734/2008', orgao: 'Câmara Municipal do Rio de Janeiro', esfera: 'Municipal', uf: 'RJ', tipo: 'Lei', tema: 'Celulares nas escolas',
    resumo: 'Segundo o texto reproduzido em site de legislação, proíbe o uso de celular, games, iPod, MP3 e equipamentos similares em sala de aula nas instituições de ensino do município e exige placas informativas.',
    abrangencia: 'Instituições de ensino situadas no Município do Rio de Janeiro (conforme o texto reproduzido).', publicacao: '04/01/2008', vigencia: 'A verificar.',
    verificadoEm: V, verificacao: 'secundaria', fonte: 'Contábeis (reprodução do texto); fonte oficial não conferida', link: null },
  { id: 'decreto-rio-2023', titulo: 'Decreto da Prefeitura do Rio sobre uso de celulares por alunos', numero: 'Número a verificar (noticiado em 2023)', orgao: 'Prefeitura do Rio de Janeiro', esfera: 'Municipal', uf: 'RJ', tipo: 'Decreto', tema: 'Celulares nas escolas',
    resumo: 'A imprensa noticiou em 2023 um decreto municipal restringindo o uso de celulares por alunos da rede municipal. Número, texto e situação atual ainda não foram verificados.',
    abrangencia: 'A verificar.', publicacao: null, vigencia: 'A verificar.',
    verificadoEm: V, verificacao: 'a_verificar', fonte: 'Olhar Digital (08/08/2023)', link: null },
];
