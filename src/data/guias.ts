// Guias práticos. Cada item indica a ORIGEM: guia (Secom 2025, lido na íntegra, com página impressa), lei (texto oficial lido),
// lei_sec (confirmada só em fonte secundária) ou projeto (sugestão da equipe, sem validação especializada).
export type Origem = 'guia' | 'lei' | 'lei_sec' | 'projeto';
export type Item = { titulo: string; texto: string; origem: Origem; ref?: string };
export type SecaoGuia = { id: string; titulo: string; intro?: string; itens: Item[]; modelo?: { titulo: string; texto: string } };
export type Guia = { tag: string; titulo: string; intro: string; aviso: string; secoes: SecaoGuia[]; fontes: { titulo: string; url: string }[]; verMais: { slug: string; rotulo: string }[] };

const G = 'Guia Secom 2025';
const GUIA_URL = 'https://diadainternetsegura.org.br/wp-content/uploads/2025/04/guia-de-telas_comprimido.pdf';

export const GUIA_PAIS: Guia = {
  tag: 'Guia para pais e responsáveis', titulo: 'Caminhos práticos, sem culpa e sem receita pronta',
  intro: 'Não existe família perfeita nem rotina igual para todos. As orientações abaixo vêm principalmente do guia do Governo Federal sobre crianças, adolescentes e telas, e você escolhe o que cabe na sua realidade.',
  aviso: 'Conteúdo educativo. Cada orientação mostra a origem. Não substitui profissionais de saúde ou educação.',
  secoes: [
    { id: 'conversar', titulo: 'Como conversar com seu filho', itens: [
      { titulo: 'Comece pela curiosidade', texto: 'Pergunte o que ele gosta de ver e de jogar, peça que mostre e, quando possível, assista ou jogue junto. Conversar sobre o conteúdo é a base da mediação ativa.', origem: 'guia', ref: `${G}, p. 51 e 54` },
      { titulo: 'Ouça antes de orientar', texto: 'O guia defende que crianças e adolescentes participem das decisões sobre telas. Regras que eles ajudam a construir tendem a ser mais aceitas.', origem: 'guia', ref: `${G}, p. 47 e 60` },
      { titulo: 'Seja uma referência', texto: 'O uso excessivo por parte dos adultos é apontado como um dos fatores que mais contribuem para o uso precoce e excessivo pelas crianças.', origem: 'guia', ref: `${G}, resumo das recomendações e p. 53` },
      { titulo: 'Sem culpa', texto: 'O guia afirma que famílias não devem ser culpadas: a responsabilidade é compartilhada com escola, empresas e Estado, e muitas famílias têm pouco tempo e pouca rede de apoio.', origem: 'guia', ref: `${G}, p. 20, 52, 63 e 64` },
      { titulo: 'Ensine a se proteger', texto: 'Converse sobre segurança, privacidade, respeito online e como reconhecer fontes confiáveis.', origem: 'guia', ref: `${G}, p. 54` },
    ] },
    { id: 'regras', titulo: 'Regras e acordos familiares', itens: [
      { titulo: 'Faça um plano familiar', texto: 'Planos de uso funcionam melhor quando as regras são claras, consistentes e combinadas com os filhos. O foco é o que é possível na rotina da sua casa, e não só proibir.', origem: 'guia', ref: `${G}, p. 60` },
      { titulo: 'Só restringir costuma render pouco', texto: 'O guia registra que a proibição e a restrição intensa, focadas apenas no tempo de tela, parecem ter pouco efeito prático e muitas vezes não são seguidas.', origem: 'guia', ref: `${G}, p. 51 e 52` },
      { titulo: 'Horários que protegem', texto: 'Sem telas nas refeições, desconectar pelo menos 1 ou 2 horas antes de dormir, não levar o aparelho para a cama e fazer as tarefas escolares antes do entretenimento.', origem: 'guia', ref: `${G}, p. 53 e 65` },
      { titulo: 'Tempo combinado antes', texto: 'Prefira uso por tempo limitado e previamente combinado. O quadro-resumo do guia sugere evitar ultrapassar 5 horas diárias de telas e usos sem acordo de limite.', origem: 'guia', ref: `${G}, p. 65` },
      { titulo: 'Quando dar o primeiro celular', texto: 'O guia recomenda que o smartphone próprio não venha antes dos 12 anos (quanto mais tarde, melhor) e propõe perguntas para a família: para quê, se é necessidade ou pressão dos amigos, e se a criança sabe lidar com riscos e privacidade.', origem: 'guia', ref: `${G}, p. 27 e 62` },
      { titulo: 'Ajuste à idade', texto: 'Crianças aceitam melhor o acompanhamento próximo, enquanto adolescentes pedem mais espaço e privacidade. As regras podem mudar com a maturidade.', origem: 'guia', ref: `${G}, p. 60` },
    ] },
    { id: 'controle', titulo: 'Controle parental e ferramentas', itens: [
      { titulo: 'Ferramentas ajudam, mas não substituem a presença', texto: 'Os recursos de supervisão familiar auxiliam na gestão de tempo e de conteúdo, mas podem dar falsa sensação de segurança se não houver acompanhamento e conversa.', origem: 'guia', ref: `${G}, p. 55` },
      { titulo: 'Use a Classificação Indicativa', texto: 'Os ícones quadrados coloridos nas lojas de aplicativos indicam a idade mínima recomendada e servem de referência, inclusive para redes sociais.', origem: 'guia', ref: `${G}, p. 48 e 49` },
      { titulo: 'Perguntas antes de baixar um app', texto: 'Há indicação de idade? Quais proteções estão ativas? Há anúncios, compras ou pagamentos? Há violência? O app estimula uso prolongado?', origem: 'guia', ref: `${G}, p. 59` },
      { titulo: 'Atenção a mensagens e grupos', texto: 'Aplicativos de mensagens podem expor a conteúdo e contatos indesejados. O guia recomenda acompanhar essas experiências, respeitando a idade.', origem: 'guia', ref: `${G}, p. 61` },
      { titulo: 'Cuide também da privacidade deles', texto: 'Compartilhar muitas fotos e informações dos filhos nas redes (sharenting) pode trazer riscos no futuro. Pense antes de publicar.', origem: 'guia', ref: `${G}, p. 57` },
    ] },
    { id: 'atividades', titulo: 'Atividades alternativas', itens: [
      { titulo: 'Brincar, mexer o corpo, estar com gente', texto: 'Incentive atividades ao ar livre, esportes e encontros presenciais. O guia lembra que o brincar e a desconexão são direitos de crianças e adolescentes.', origem: 'guia', ref: `${G}, p. 42 e 54` },
      { titulo: 'O possível, no seu contexto', texto: 'Nem toda família tem praça, quintal seguro ou tempo livre. O guia reconhece isso e pede equilíbrio na medida do possível, sem culpa.', origem: 'guia', ref: `${G}, p. 44 e 64` },
      { titulo: 'Tempo ao ar livre pode compensar', texto: 'O guia cita pesquisas recentes sugerindo que atividades ao ar livre podem aliviar parte dos prejuízos do tempo excessivo online no desenvolvimento motor, social e da linguagem.', origem: 'guia', ref: `${G}, p. 44` },
      { titulo: 'Usos criativos e educativos', texto: 'Arte digital, programação, edição de vídeo para trabalhos e pesquisas da escola são usos mais ativos do que só assistir.', origem: 'guia', ref: `${G}, p. 54 e 65` },
      { titulo: 'Telas em espaços comuns', texto: 'Manter dispositivos em áreas compartilhadas facilita acompanhar e conversar.', origem: 'guia', ref: `${G}, p. 54` },
    ] },
  ],
  fontes: [{ titulo: 'Crianças, Adolescentes e Telas: Guia sobre Usos de Dispositivos Digitais (Secom, 2025)', url: GUIA_URL }],
  verMais: [{ slug: 'ajuda', rotulo: 'Ajuda e apoio' }, { slug: 'biblioteca', rotulo: 'Biblioteca' }, { slug: 'quiz', rotulo: 'Fazer o quiz' }],
};

export const GUIA_EDUCADORES: Guia = {
  tag: 'Guia para profissionais de educação', titulo: 'Aplicar a regra com diálogo e com a comunidade escolar',
  intro: 'Referências para professores, coordenadores e gestores colocarem em prática a norma sobre celulares e apoiarem as famílias. As regras detalhadas dependem da sua rede de ensino.',
  aviso: 'Não substitui orientação jurídica nem a norma da sua rede (estadual, municipal ou privada). Itens marcados como sugestão do projeto não foram validados por especialistas.',
  secoes: [
    { id: 'lei', titulo: 'Como aplicar a lei na escola', itens: [
      { titulo: 'O que a Lei 15.100/2025 estabelece', texto: 'Proíbe o uso de celulares e aparelhos pessoais por estudantes durante a aula, o recreio e os intervalos na educação básica. Em sala, o uso é permitido para fins pedagógicos conforme orientação dos profissionais. Há exceções para perigo, necessidade ou força maior, e para acessibilidade, inclusão, saúde e direitos fundamentais.', origem: 'lei', ref: 'Lei nº 15.100/2025 (texto no Planalto)' },
      { titulo: 'Regulamentação federal', texto: 'O Decreto nº 12.385/2025 prevê estratégias de orientação dos estudantes, formação de profissionais, participação da comunidade escolar e documento de profissional de saúde em casos de tecnologia assistiva ou cuidado de saúde. Confira o texto oficial antes de aplicar.', origem: 'lei_sec', ref: 'Agência Brasil e guia do IFPE' },
      { titulo: 'Gestão democrática', texto: 'O guia do Governo Federal recomenda que as regras de cada escola sigam a Lei 15.100, considerando a autonomia pedagógica, a gestão democrática e a participação da comunidade escolar.', origem: 'guia', ref: `${G}, resumo das recomendações (item 7)` },
      { titulo: 'Acessibilidade em primeiro lugar', texto: 'O guia recomenda estimular o uso de dispositivos para acessibilidade ou superação de barreiras por estudantes com deficiência, em qualquer idade.', origem: 'guia', ref: `${G}, resumo das recomendações` },
      { titulo: 'Uso pedagógico com critério', texto: 'O guia alerta que o uso não pedagógico de dispositivos na escola pode prejudicar a aprendizagem e pede cuidado ao usar aparelhos na primeira infância, evitando o uso individual. Também orienta evitar tarefas que estimulem crianças menores de 12 anos a ter celular próprio ou usar aplicativos de mensagem.', origem: 'guia', ref: `${G}, resumo das recomendações` },
    ] },
    { id: 'comunicacao', titulo: 'Modelos de comunicação com as famílias',
      intro: 'O guia não traz modelos de regimento. Abaixo, um modelo de comunicado elaborado pelo projeto, para adaptar.',
      itens: [{ titulo: 'Antes de enviar', texto: 'Adapte o texto à norma da sua rede, confirme as regras locais com a equipe pedagógica ou jurídica e inclua o canal de contato da escola.', origem: 'projeto' }],
      modelo: { titulo: 'Modelo de comunicado (adapte)', texto: 'Prezadas famílias,\n\nA [NOME DA ESCOLA] informa que, conforme a Lei Federal nº 15.100/2025 e a norma da nossa rede de ensino, o uso de celulares pelos estudantes passa a seguir estas regras: [DESCREVER AS REGRAS DA ESCOLA: aulas, recreio, intervalos, local de guarda do aparelho].\n\nO uso será permitido quando houver orientação pedagógica ou necessidade de acessibilidade, saúde ou segurança. Em caso de urgência, as famílias podem contatar a escola pelo [CANAL DA ESCOLA].\n\nQueremos construir essa rotina junto com vocês. Convidamos todos para a reunião de [DATA E HORA], em que conversaremos sobre as dúvidas e sugestões da comunidade escolar.\n\nContamos com a parceria de vocês.\n[Nome e cargo]' } },
    { id: 'atividades', titulo: 'Atividades e planos de aula', intro: 'Sugestões do projeto para estimular hábitos digitais saudáveis. Não são planos de aula validados; adapte à turma e ao currículo.',
      itens: [
        { titulo: 'Roda de conversa: nossos combinados', texto: 'A turma discute quando o celular ajuda e quando atrapalha e escreve combinados coletivos.', origem: 'projeto' },
        { titulo: 'Mapa da vida além da tela', texto: 'Cada estudante lista atividades que gosta de fazer sem tela e escolhe uma para experimentar na semana.', origem: 'projeto' },
        { titulo: 'Como os aplicativos prendem a atenção', texto: 'Debate com apoio do guia: economia da atenção, algoritmos de recomendação e design que estimula o uso prolongado.', origem: 'guia', ref: `${G}, p. 28 a 35` },
        { titulo: 'Cyberbullying: o que fazer', texto: 'Discuta como registrar e relatar ofensas e quem procurar. O guia registra que a lei de 2024 (nº 14.811) trata de formas de violência contra crianças e adolescentes, incluindo o cyberbullying.', origem: 'guia', ref: `${G}, p. 38 e 40` },
      ] },
    { id: 'familias', titulo: 'Como orientar as famílias', itens: [
      { titulo: 'Convide, não acuse', texto: 'O guia pede acolhimento: famílias não devem ser culpadas, e muitas enfrentam sobrecarga e falta de apoio. Apresente a regra como construção coletiva.', origem: 'guia', ref: `${G}, p. 52, 63 e 64` },
      { titulo: 'Compartilhe materiais confiáveis', texto: 'Indique o guia do Governo Federal e o manual da Sociedade Brasileira de Pediatria, disponíveis na Biblioteca do site.', origem: 'projeto' },
      { titulo: 'Explique a Classificação Indicativa', texto: 'Ajude as famílias a usar os ícones de idade nas lojas de aplicativos como referência.', origem: 'guia', ref: `${G}, p. 48 e 49` },
      { titulo: 'Saiba para onde encaminhar', texto: 'Quando houver sinais de sofrimento, violência ou cyberbullying, oriente a família sobre os canais da seção Ajuda e apoio e envolva a equipe da escola.', origem: 'projeto' },
    ] },
  ],
  fontes: [{ titulo: 'Guia Secom 2025', url: GUIA_URL }, { titulo: 'Lei nº 15.100/2025 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15100.htm' }],
  verMais: [{ slug: 'legislacao', rotulo: 'Legislação' }, { slug: 'ajuda', rotulo: 'Ajuda e apoio' }, { slug: 'biblioteca', rotulo: 'Biblioteca' }],
};
