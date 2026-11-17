# Além da Tela

Projeto de extensão (Felipe Espínola e Zeneida Girão, Faculdade de Tecnologia Senac RJ).
Expo + React Native Web + TypeScript: um código para PC (navegador) e celular (Expo Go).

## Executar
    npm install
    npx expo start --web     # navegador
    npx expo start           # QR code para o Expo Go no celular

## Estado atual (etapas 1, 2, quiz, legislação, outros países, ajuda, biblioteca, sobre, por que se preocupar, guias e interações)
- Pronto: identidade visual (paleta da logo, Fraunces + Inter), Home, cabeçalho responsivo com menu mobile, rodapé, rotas das 9 seções do mapa.
- Quiz funcional em /secao/quiz (RF16, RF17, RF19; RF18 e RF20 parciais). Respostas não são gravadas; só contadores anônimos (base do RF28). Perguntas e faixas são educativas, não validadas clinicamente; ainda não há conjuntos separados por faixa etária.
- Legislação em /secao/legislacao (RF09 a RF12 parciais): 6 normas com busca e filtros por esfera, tipo e tema. Só a Lei 15.100/2025 teve o texto lido em fonte oficial; as demais estão marcadas como 'fonte secundária' ou 'a verificar' na própria tela. Datas, links e vigência ausentes aparecem como 'a verificar' (nada foi preenchido de memória). Faltam: Marco Civil, LGPD e ECA (Lei 8.069/1990) e a conferência no ALERJ da Lei 5.222/2008 e da 5.453/2009.
- Outros países em /secao/outros-paises: França, Finlândia, Holanda e Austrália, todos com fonte secundária (imprensa) e vários campos 'a verificar'. Sem afirmação de resultados. Itália, Portugal, Espanha, Canadá, México e Dinamarca (da apresentação) ainda não verificados. Sem vídeos por país (mapa 3.2).
- Ajuda e apoio em /secao/ajuda (RF20 concluído): SAMU 192, CVV 188, Disque 100, SaferNet, Conselho Tutelar e CAPS, cada um com fonte e data. CVV e Disque 100 vieram de fonte oficial; SAMU e SaferNet de fonte secundária; Conselho Tutelar e CAPS sem telefone (variam por município). Lista de sinais e FAQ são texto do projeto, sem revisão profissional ainda.
- Biblioteca em /secao/biblioteca (RF03, RF04, RF15 parciais; RF06 e RF07 pendentes): 3 materiais com link (Guia Secom/UNESCO 2025 e manual da SBP, edições 2019 e 2024), busca e filtros por público, tipo e tema. Não há vídeos, cartilhas escolares nem artigos catalogados ainda; o filtro por data e a paginação não foram feitos. O link do guia é uma cópia hospedada por terceiro; conferir no portal do governo.
- Sobre em /secao/sobre: contexto acadêmico (disciplina Educação Digital, professora Gabriela Silveira, Senac RJ), autores, fontes principais. Contato e newsletter na própria página Sobre.
- Por que se preocupar em /secao/por-que-se-preocupar (RF02 parcial): 4 temas (saúde física/sono, saúde mental, atenção/aprendizagem, riscos online), cada trecho com etiqueta (recomendação, pesquisa, associação, incerto, relato), 'o que fazer' e fontes com link. Fontes: SBP, aviso do Surgeon General dos EUA (2023), relatório GEM 2023 da UNESCO (via imprensa) e ECA Digital. Visão, postura e sedentarismo ainda sem fonte verificada; sem vídeos (1.5); páginas separadas por tema (1.1 a 1.4) não foram feitas.
- Guias em /secao/guia-pais e /secao/guia-educadores: orientações baseadas no Guia Secom 2025 (lido na íntegra; cada item cita a página impressa), na Lei 15.100/2025 e, onde marcado, em fonte secundária (Decreto 12.385) ou sugestão do projeto. Inclui modelo de comunicado para escolas (com botão copiar), marcado como modelo a adaptar. Faltam: modelos de regimento (o guia não traz), planos de aula validados e revisão por especialista em educação. Itens do mapa 5.x e 6.x cobertos em abas, não em páginas separadas.
- Interações: compartilhamento (RF21) em todas as páginas (WhatsApp, e-mail, Facebook e X no navegador; folha de compartilhamento do sistema no celular, onde não há endereço público); formulário de contato e sugestão (RF22) e newsletter opcional com consentimento e cancelamento (RF23), com validação e estados de erro/sucesso. MODO DEMONSTRAÇÃO: sem servidor, mensagens e inscrições ficam só no aparelho e não chegam à equipe; nenhum e-mail é enviado. Falta definir o e-mail ou a API de destino. Os links de compartilhamento só foram testados como texto, não abertos nos aplicativos.
- Rolagem volta ao topo ao trocar de página (corrigido em app/_layout.tsx).
- As demais seções ainda mostram "Em construção" com os itens previstos. Fora o quiz, nenhum RF está concluído.
- Verificado: `tsc --noEmit` sem erros e `expo export --platform web` compila. Não foi testado visualmente em navegador nem em celular.

## Próximas etapas
Camada `src/services` (JSON local + AsyncStorage), legislação, quiz, biblioteca, busca/filtros, formulários, painel admin de demonstração.
Conteúdo jurídico e estatístico só entra após verificação em fonte oficial.

- Acessibilidade: o coral foi escurecido de #E8553A para #BD3D26 após cálculo de contraste (o original dava 3,63:1 com texto branco, abaixo do mínimo AA de 4,5:1).

## Imagens (infográficos e ilustrações)
- 6 infográficos em assets/img/info-*.png (lei 15.100, linha do tempo, guia por idade, países, associação x causa, canais de ajuda): usam só dados já verificados, cada um traz fonte e data de verificação na própria imagem, e o site oferece a descrição em texto (acessibilidade).
- 5 ilustrações originais em assets/img/ilus-*.png (ar livre, sono, conversa, estudo, proteção online), no estilo de silhuetas da logo. Não são fotos nem pessoas reais.
- Fontes editáveis (SVG) na pasta de imagens entregue à parte. Se um dado mudar, edite o SVG e exporte de novo.
- Limitação: texto dentro de imagem não é pesquisável nem redimensiona com a tela; por isso cada infográfico tem a versão em texto.

## Banners com foto (fornecidos pela equipe)
- foto-sono: Por que se preocupar?, aba Saúde física e sono
- foto-aprendizado: aba Atenção, concentração e aprendizagem
- foto-ansiedade e foto-isolamento: aba Saúde mental (no topo e antes do infográfico)
- foto-jogos-redes: aba Riscos online, junto a um trecho do Guia Secom (pp. 29 a 35) sobre design que prende a atenção
- foto-infancia: Guia para pais (topo) e Home (antes do quiz)
- O texto escrito em cada banner está repetido no texto alternativo. Os banners nunca são ampliados além do tamanho original.
- As ilustrações sono, conversa, estudo e proteção deixaram de ser usadas (substituídas pelas fotos), mas continuam em assets/img.

## Correção importante (10/11/2026)
- Image.resolveAssetSource não existe no React Native Web: as páginas com infográficos quebravam no navegador. Agora as dimensões ficam em src/data/imagens.ts.
- No navegador, a imagem ignorava aspectRatio; a proporção agora fica num View em volta da imagem.
- Testado no Chromium (Playwright): as 10 rotas carregam sem erros nem imagens quebradas, e a proporção de cada imagem foi medida em 390 px e 1366 px.

## Fotos adicionadas (17/11/2026)
- foto-parque.jpg: Home, no fechamento ("Que tal combinar um passeio...") — substitui a ilustração ilus-ar-livre (que continua em assets/img, sem uso).
- foto-sobre-nos.jpg: página Sobre, em Contexto acadêmico, logo após os integrantes (largura máxima de 380 px).
- foto-biblioteca.jpg: página Sobre, em Fontes e referências.
- As três foram convertidas para JPEG otimizado (126 a 293 KB). Testadas no navegador em 390 px e 1366 px.

## Hover e foco (17/11/2026)
- src/components/WebStyles.tsx injeta, só na web, estilos para todo elemento clicável:
  - botões, abas, filtros, opções e caixas de seleção: escurecem levemente e ganham um véu azul;
  - links só com texto (menu, rodapé): sublinhado;
  - links com conteúdo (botões e blocos da Home, itens de lista): escurecem e sobem 2 px.
- O hover só vale em aparelhos com mouse (no toque ficaria "preso" após o clique) e respeita a preferência por menos movimento.
- Foco visível pelo teclado: contorno azul de 3 px (pendência de acessibilidade WCAG 2.2 resolvida).
- Testado no Chromium: 18 tipos de elemento clicável em 7 páginas mudam de estilo no hover; foco pelo teclado aparece; no celular emulado o hover não se aplica.

## Lint
- ESLint configurado com eslint-config-expo (eslint.config.js). Rode: npx eslint .
- Corrigido: Legislação e Biblioteca limpavam o estado dentro de um efeito (renderização extra); agora a limpeza acontece ao mudar o filtro.

## Outras correções
- Home: nos blocos "Pais e responsáveis" e "Escolas e professores", rótulo e título ficavam colados na mesma linha no navegador; agora ficam em um View interno.
