# neverready

[Svelte](https://svelte.dev) + [SvelteKit](https://kit.svelte.dev) website for 2022 never ready conference.

## Development

Download
```
git clone https://github.com/Klasse-Digitale-Grafik/never-ready.git
```

Install
```
npm i
```

Development
```
npm run dev
```

Export
```
npm run build
```

> If you have never worked with [Svelte](https://www.youtube.com/watch?v=rv3Yq-B8qp4) and SvelteKit before: Svelte is a JS compiler that makes it easier to make interactive interface with Html, Js, Css. SvelteKit is a framework that makes it easy to build real websites with Svelte. You might want to download a Svelte extension for your code editor ([CS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)) or [Atom](https://atom.io/packages/ide-svelte)).

## Where to edit stuff

- Pages `src/routes/...`
- Website Components `src/lib/...`
- Global CSS `/static/global.css`
- Static images `static/images/...`
- Fonts `/static/fonts/...` (reference in `global.css`)
- Favicon `static/favicon/...` (reference in `app.html`)