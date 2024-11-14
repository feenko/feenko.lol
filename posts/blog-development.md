---
title: Building a Blog in Next.JS
description: In this post, you will see how i created my own markdown blog in Next.JS from scratch.
date: '2024-11-14'
---

To be honest, I've never made a blog before, so everything i have to say here is my own personal experience. I'm sure there are better ways to do it, but I wanted to try it out.

## Tech stack

For this project i decided to go with:

- [Next.JS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
  - [TailwindCSS Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- [gray-matter](https://github.com/jonschlinkert/gray-matter)
- [markdown-it](https://github.com/markdown-it/markdown-it)
  - [@mdit/plugin-abbr](https://github.com/mdit-plugins/mdit-plugins/tree/main/packages/abbr)
  - [@mdit/plugin-mathjax](https://github.com/mdit-plugins/mdit-plugins/tree/main/packages/mathjax)
  - [@mdit/plugin-tasklist](https://github.com/mdit-plugins/mdit-plugins/tree/main/packages/tasklist)

## Installation

Firstly, create a new Next.js project (or go with an existing one) and install the dependencies:

`@tailwindcss/typography` is optional but highly recommended

```bash
pnpm add gray-matter markdown-it @tailwindcss/typography
```

For typescript users, install the types:

```bash
pnpm add -D @types/markdown-it
```

If you want to add some spice to your markdown, install following plugins:

```bash
pnpm add @mdit/plugin-abbr @mdit/plugin-mathjax @mdit/plugin-tasklist
```

## Plugins Showcase

### Abbreviations (abbr)

*[Lorem ipsum]: Popular placeholder text in the publishing industry.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

### Mathjax

$$
\begin{align*}
&\bullet \ V_{Y,1} = 0.42 \\
&\bullet \ V_{Y,t} = \left( V_{Y,t-1} - 0.08_{\text{gravity}} \right) \times 0.98_{\text{drag}}
\end{align*}
$$

### Tasklist

<div style="margin-top: 1rem;" />

- [ ] Not finished task
- [x] Finished task

## Implementation

My whole website is fully open-source so you can check it out [here](https://github.com/feenko/feenko.lol).

Those are the most important files you should take a look at:

- [src/lib/posts.ts](https://github.com/feenko/feenko.lol/blob/main/src/lib/posts.ts)
- [src/app/blog/page.tsx](https://github.com/feenko/feenko.lol/blob/main/src/app/blog/page.tsx)
- [src/app/blog/[slug]/page.tsx](https://github.com/feenko/feenko.lol/blob/main/src/app/blog/[slug]/page.tsx)
- [tailwind.config.ts](https://github.com/feenko/feenko.lol/blob/main/tailwind.config.ts#L63-L87) (Line: 63-87)

## Conclusion

I hope you enjoyed this post and learned something new. If you have any questions, please don't hesitate to [contact me](https://github.com/feenko).