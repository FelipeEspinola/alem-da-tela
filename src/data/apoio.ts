// Serviços de apoio. Só entram telefones/endereços encontrados em fonte consultada; nada de memória.
// 'oficial' = site/relatório da própria instituição ou do governo; 'secundaria' = imprensa ou terceiros.
export type Canal = { rotulo: string; valor: string; tel?: string; url?: string };
export type Servico = {
  id: string; nome: string; paraQue: string; canais: Canal[]; horario: string;
  verificacao: 'oficial' | 'secundaria'; fonte: string; verificadoEm: string; urgente?: boolean;
};
const V = '2026-10-26';
export const SERVICOS: Servico[] = [
  { id: 'samu', nome: 'SAMU', paraQue: 'Emergência médica ou risco imediato à vida.', canais: [{ rotulo: 'Telefone', valor: '192', tel: '192' }],
    horario: 'Todos os dias, 24 horas (segundo a fonte).', verificacao: 'secundaria', fonte: 'TherapyRoute (cita a tabela de números da Anatel)', verificadoEm: V, urgente: true },
  { id: 'cvv', nome: 'CVV — Centro de Valorização da Vida', paraQue: 'Apoio emocional e prevenção do suicídio, para qualquer pessoa, inclusive adolescentes.',
    canais: [{ rotulo: 'Telefone', valor: '188', tel: '188' }, { rotulo: 'Chat', valor: 'cvv.org.br/chat', url: 'https://cvv.org.br/chat' }],
    horario: 'Telefone 188 em tempo integral, sem custo de ligação.', verificacao: 'oficial', fonte: 'Relatório do CVV (1º tri/2026)', verificadoEm: V, urgente: true },
  { id: 'disque100', nome: 'Disque 100 (Disque Direitos Humanos)', paraQue: 'Denunciar violações de direitos, inclusive contra crianças e adolescentes.',
    canais: [{ rotulo: 'Telefone', valor: '100', tel: '100' }, { rotulo: 'WhatsApp', valor: '(61) 99611-0100' }, { rotulo: 'E-mail', valor: 'ouvidoria@mdh.gov.br' }],
    horario: 'Todos os dias, 24 horas; ligação gratuita.', verificacao: 'oficial', fonte: 'Agência Gov / Ministério dos Direitos Humanos (09/2026)', verificadoEm: V },
  { id: 'safernet', nome: 'SaferNet Brasil', paraQue: 'Denunciar conteúdo criminoso na internet (de forma anônima) e receber orientação sobre violência digital, como exposição de imagens íntimas.',
    canais: [{ rotulo: 'Denúncias', valor: 'denunciar.org.br', url: 'https://denunciar.org.br' }, { rotulo: 'Helpline (chat)', valor: 'helpline.org.br', url: 'https://helpline.org.br' }],
    horario: 'Horário do Helpline: a verificar no site.', verificacao: 'secundaria', fonte: 'Convergência Digital e Correio Braziliense; endereços a conferir no site da SaferNet', verificadoEm: V },
  { id: 'conselho', nome: 'Conselho Tutelar', paraQue: 'Proteger os direitos de crianças e adolescentes diante de ameaça ou violação.',
    canais: [{ rotulo: 'Como acessar', valor: 'Procure o Conselho Tutelar do seu município (contato local).' }],
    horario: 'A verificar no seu município.', verificacao: 'oficial', fonte: 'Agência Gov / Ministério dos Direitos Humanos (09/2026)', verificadoEm: V },
  { id: 'caps', nome: 'CAPS (Centros de Atenção Psicossocial)', paraQue: 'Atendimento em saúde mental pelo SUS, parte da Rede de Atenção Psicossocial.',
    canais: [{ rotulo: 'Como acessar', valor: 'Informe-se na unidade de saúde do seu município; endereços e telefones variam.' }],
    horario: 'A verificar no seu município.', verificacao: 'secundaria', fonte: 'CONASS (reprodução de nota do Ministério da Saúde, 2018)', verificadoEm: V },
];
export const SINAIS = [
  'Mudanças fortes no sono (dormir muito pouco ou muito) que se mantêm por semanas.',
  'Queda importante no desempenho escolar ou desinteresse por atividades de que gostava.',
  'Isolamento de amigos e da família, ou irritação intensa quando não está com o celular.',
  'Sinais de sofrimento, como tristeza persistente, ansiedade intensa ou falas sobre não querer viver (nesse caso, busque ajuda imediatamente).',
  'Sinais de cyberbullying, exposição de imagens ou contato com pessoas desconhecidas que preocupe.',
];
export const FAQ = [
  { p: 'O Além da Tela atende ou diagnostica?', r: 'Não. É um projeto educativo; o quiz e os textos são orientativos e não substituem a avaliação de profissionais de saúde ou educação.' },
  { p: 'O quiz guarda as respostas do meu filho?', r: 'Não. As respostas ficam só no aparelho, e guardamos apenas um contador anônimo de quizzes concluídos.' },
  { p: 'Meu filho precisa de um psicólogo?', r: 'Só um profissional pode avaliar. Se os sinais acima persistirem ou houver sofrimento, vale conversar com um profissional de saúde, com a escola ou com um serviço da lista.' },
  { p: 'Os telefones estão sempre atualizados?', r: 'Cada serviço mostra a fonte e a data da última verificação. Confirme no canal oficial antes de ligar se tiver dúvida.' },
];
