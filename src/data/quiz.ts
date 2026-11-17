// Questionário EDUCATIVO elaborado para o projeto. Não é escala clínica validada.
export type Opcao = { texto: string; peso: number };
export type Pergunta = { id: string; texto: string };

export const OPCOES: Opcao[] = [
  { texto: 'Quase nunca', peso: 0 },
  { texto: 'Às vezes', peso: 1 },
  { texto: 'Com frequência', peso: 2 },
  { texto: 'Quase sempre', peso: 3 },
];

export const PERGUNTAS: Pergunta[] = [
  { id: 'sono', texto: 'O uso do celular atrapalha o horário de dormir ou o sono do seu filho?' },
  { id: 'refeicoes', texto: 'Seu filho usa o celular durante as refeições ou em momentos de convivência da família?' },
  { id: 'conflito', texto: 'Pedir para guardar o celular costuma gerar discussões intensas?' },
  { id: 'tarefas', texto: 'O celular atrapalha as tarefas da escola ou os estudos?' },
  { id: 'presencial', texto: 'Seu filho tem trocado brincadeiras, esportes ou encontros com amigos pelo celular?' },
  { id: 'humor', texto: 'Seu filho fica muito irritado, ansioso ou triste quando está sem o celular?' },
  { id: 'tempo', texto: 'Seu filho passa mais tempo no celular do que havia combinado, mesmo tentando reduzir?' },
  { id: 'conteudo', texto: 'Você tem preocupação com o que seu filho vê ou com quem conversa online?' },
];

export const MAX = PERGUNTAS.length * 3;

export type Faixa = {
  id: 'equilibrado' | 'atencao' | 'orientacao';
  titulo: string; ate: number; explicacao: string; acoes: string[];
};

// Critério transparente: soma simples dos pesos (0 a 3 por pergunta).
export const FAIXAS: Faixa[] = [
  { id: 'equilibrado', titulo: 'Uso equilibrado', ate: 7,
    explicacao: 'Suas respostas sugerem que o celular tem um lugar equilibrado na rotina. Vale manter o diálogo e os combinados.',
    acoes: ['Mantenha conversas regulares sobre o que seu filho gosta de fazer online.', 'Preserve horários sem tela, como refeições e antes de dormir.'] },
  { id: 'atencao', titulo: 'Vale prestar atenção', ate: 15,
    explicacao: 'Algumas respostas indicam pontos que merecem cuidado. Isso não é um diagnóstico: é um convite para ajustar a rotina em conjunto.',
    acoes: ['Combine regras com seu filho, em vez de impô-las.', 'Proponha atividades presenciais que ele goste.', 'Observe sono, humor e desempenho escolar nas próximas semanas.'] },
  { id: 'orientacao', titulo: 'Vale buscar orientação', ate: MAX,
    explicacao: 'Suas respostas indicam que o celular pode estar pesando bastante na rotina. Conversar com um profissional pode ajudar, sem julgamentos.',
    acoes: ['Procure um profissional de saúde ou de psicologia, ou a escola, para conversar.', 'Evite punições bruscas; priorize o diálogo e o acolhimento.', 'Se houver sofrimento intenso ou situação de risco, busque atendimento de saúde.'] },
];

export const faixaPara = (pontos: number): Faixa => FAIXAS.find((f) => pontos <= f.ate) ?? FAIXAS[FAIXAS.length - 1];
