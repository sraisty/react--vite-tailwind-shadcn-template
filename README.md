# React + TypeScript + Vite + Tailwind + Shadcn

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Get started

```
npm install
npm run dev
```

point web browser at <http://localhost:5173>

## Tailwind

This repo is pre-configured to use [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) utility classes for styling.

Here is a handy-dandy ["Interactive Cheat Sheet" of TailwindCSS](https://tailwindcss.504b.cc/) classes.


Future Consideration:
- prettier-plugin-tailwindcss plugin, to automatically reorder tailwind classes.

## Shadcn/ui

This repo is pre-setup with shadcn/ui, which is a package that lets you "build" your component library using Tailwind.

To setup the project with shadcn, you run
`npx shadcn@latest init`

It will ask a few questions, including your preferred color schme.

This process creates a ./components.json for you.

If you want to redo thish whole config process, erase ./components.json and start over.

Now you can start adding shadcn components to your project:

```
npx shadcn@latest add button
```

The above will add the "Button" component to my project in the `@/components/ui` directory.

In my other react files, I can mport the button and use it:

```
import {Button} from '@/components/ui/button
```


Refer to the [Shadcn documentation](https://ui.shadcn.com/docs/components/accordion) to add more components, because many of them require you do an 'npm install' of some kind first as well as other edits to tailwind.config.js,


## ESLint configuration

Note that his repo "@eslint-react/eslint-plugin" eslint plugin instead of the traditional eslint-plugin-react, because it is more modern and inline with the new "ESLint React" ecosystem.

The @eslint-react/eslint-plugin is a master/unified plugin consisting of:

- eslint-plugin-react-x   (rendering agnostic rules)
- eslint-plug-react-dom
- eslint-plugin-web-api     (rules for interacting with Web APIs)
- eslint-plugin-react-hooks-extra (extra React hooks rules)
- eslint-plugin-react-naming-convention

This unified plugin is designed (and recommended) to run side-by-side with:
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- eslint-config-prettier
- eslint-plugin-jsx-a11y
- typescript-eslint





## Maybe Oneday

The Vite out-of-the-box install contained this info about vite and eslint configurations that I don't currently use. Not sure there is a need for them.

### HMR via @vitejs plugins

HMR: Currently, two official plugins are available, even though it seems like HMR is working without them?

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
