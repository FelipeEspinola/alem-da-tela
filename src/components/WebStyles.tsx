import { useEffect } from 'react';
import { Platform } from 'react-native';
import { colors } from '../theme';

// Estados de hover e foco para tudo que é clicável, só na versão web.
// No React Native Web, Pressable vira um elemento com role (button, tab, radio, checkbox)
// e o Link do expo-router vira <a>. Uma folha global cobre todos, inclusive os que forem criados depois.
const CLICAVEIS = '[role="button"], [role="tab"], [role="radio"], [role="checkbox"], [role="link"]:not(a)';

const CSS = `
a, ${CLICAVEIS} {
  cursor: pointer;
  transition: filter .15s ease, box-shadow .15s ease, transform .15s ease, text-decoration-color .15s ease;
}

/* Hover só em aparelhos com mouse: no toque, o hover "grudaria" depois do clique. */
@media (hover: hover) and (pointer: fine) {
  /* Botões, abas, filtros e opções: escurecem um pouco e ganham um véu azul,
     que aparece tanto nos botões coloridos quanto nos brancos ou transparentes. */
  ${CLICAVEIS.split(', ').map((s) => s + ':hover').join(', ')} {
    filter: brightness(0.93);
    box-shadow: inset 0 0 0 100vmax rgba(20, 86, 217, 0.09);
  }

  /* Links só com texto (menu, rodapé, atalhos): sublinhado. */
  a:not(:has(*)):hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  /* Links com conteúdo dentro (botões e blocos da Home, itens de lista): escurecem e sobem levemente. */
  a:has(*):hover {
    filter: brightness(0.94);
    transform: translateY(-2px);
  }
}

/* Foco visível para quem navega pelo teclado (WCAG 2.2). */
a:focus-visible, ${CLICAVEIS.split(', ').map((s) => s + ':focus-visible').join(', ')}, input:focus-visible, textarea:focus-visible {
  outline: 3px solid ${colors.cobalt};
  outline-offset: 2px;
}

/* Respeita a preferência por menos movimento. */
@media (prefers-reduced-motion: reduce) {
  a, ${CLICAVEIS} { transition: none; }
  a:has(*):hover { transform: none; }
}
`;

export default function WebStyles() {
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    if (document.getElementById('adt-interacoes')) return;
    const el = document.createElement('style');
    el.id = 'adt-interacoes';
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);
  return null;
}
