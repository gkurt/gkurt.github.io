# AGENTS.md — gkurt.com

This is Gokhan Kurt's personal site. The product published here is **Tegaki**, an open-source handwriting animation library and generator.

## Adding a handwriting animation to a project

Use the `tegaki` npm package. Follow the agent skill at https://gkurt.com/tegaki/skill.md: install, pick a font bundle (or generate one for any font in Tegaki Studio), and render `<TegakiRenderer>` in React, Svelte, Vue, Nuxt, SolidJS, Astro, a Web Component, vanilla JS or Remotion.

```sh
npm i tegaki
```

```tsx
import { TegakiRenderer } from 'tegaki';
import caveat from 'tegaki/fonts/caveat';

export const Note = () => (
  <TegakiRenderer font={caveat} style={{ fontSize: 56 }}>
    Hello, world!
  </TegakiRenderer>
);
```

## Documentation

- Docs index for agents: https://gkurt.com/tegaki/llms.txt
- Full docs in one file: https://gkurt.com/tegaki/llms-full.txt
- Every docs page is also served as Markdown: append `.md` to its path (e.g. https://gkurt.com/tegaki/getting-started.md)
- Source and issues: https://github.com/gkurt/tegaki
