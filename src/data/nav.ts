// Estrutura extraída do MAPA NAVEGACAO.png
export type Secao = { slug: string; titulo: string; curto: string; itens: string[] };
export const SECOES: Secao[] = [
  { slug: 'por-que-se-preocupar', titulo: 'Por que se preocupar?', curto: 'Por quê?', itens: ['Saúde física (sono, visão, postura, sedentarismo)', 'Saúde mental (ansiedade, depressão, isolamento)', 'Aprendizagem e atenção', 'Riscos online (cyberbullying, conteúdo impróprio, exposição de dados)', 'Vídeos e materiais sobre os efeitos'] },
  { slug: 'legislacao', titulo: 'Legislação', curto: 'Legislação', itens: ['Brasil: leis federais (celulares nas escolas, ECA e ECA Digital, Marco Civil e LGPD)', 'Leis estaduais', 'Leis municipais'] },
  { slug: 'outros-paises', titulo: 'O que outros países fizeram', curto: 'Outros países', itens: ['Visão geral (tabela comparativa)', 'Página por país', 'Lições aprendidas'] },
  { slug: 'quiz', titulo: 'Quiz: seu filho usa o celular demais?', curto: 'Quiz', itens: ['Apresentação e aviso (não é diagnóstico)', 'Perguntas por faixa etária', 'Resultado', 'Próximos passos'] },
  { slug: 'guia-pais', titulo: 'Guia para pais', curto: 'Para pais', itens: ['Como conversar com seu filho', 'Regras e acordos familiares', 'Controle parental', 'Atividades alternativas'] },
  { slug: 'guia-educadores', titulo: 'Guia para profissionais de educação', curto: 'Para escolas', itens: ['Como aplicar a lei na escola', 'Modelos de regimento e comunicados', 'Atividades e planos de aula', 'Como orientar as famílias'] },
  { slug: 'biblioteca', titulo: 'Biblioteca de materiais', curto: 'Biblioteca', itens: ['Vídeos', 'Cartilhas e PDFs', 'Artigos e pesquisas', 'Filtros por público, tipo e tema'] },
  { slug: 'ajuda', titulo: 'Ajuda e apoio', curto: 'Ajuda', itens: ['Quando procurar um profissional', 'Serviços e canais de apoio', 'Perguntas frequentes'] },
  { slug: 'sobre', titulo: 'Sobre', curto: 'Sobre', itens: ['Quem somos e objetivo do site', 'Fontes e referências', 'Contato'] },
];
