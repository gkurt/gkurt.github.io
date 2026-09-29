# AGENTS.md — gkurt.com

This is Gokhan Kurt's personal site. The product published here is **Tegaki**, an open-source handwriting animation library and generator.

To add a handwriting animation to a project, use the `tegaki` npm package and follow the agent skill at https://tegaki.ink/skill.md.

## Installation

```sh
npm i tegaki
```

## Configuration

- Font: import a bundled font from `tegaki/fonts/<name>` (caveat, italianno, tangerine, parisienne, suez-one, amiri, tillana, atma, klee-one, nanum-pen-script, lxgw-wenkai), or generate a bundle for any font in Tegaki Studio (https://tegaki.ink/studio/).
- Framework: `tegaki` (React), `tegaki/svelte`, `tegaki/vue`, `tegaki/nuxt`, `tegaki/solid`, `tegaki/astro`, `tegaki/wc` (custom element) or `tegaki/core` (vanilla JS).
- Timing: `time={{ mode: 'uncontrolled', speed, loop }}` to play, a number of seconds or `'50%'` to scrub, `'css'` to follow the `--tegaki-progress` custom property.
- Effects: `effects={{ glow, wobble, pressureWidth, taper, strokeGradient, globalGradient }}`.

## Usage

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

- Docs index for agents: https://tegaki.ink/llms.txt
- Full docs in one file: https://tegaki.ink/llms-full.txt
- Every docs page is also served as Markdown: append `.md` to its path (e.g. https://tegaki.ink/getting-started.md)
- Source and issues: https://github.com/gkurt/tegaki
