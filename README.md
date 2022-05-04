# neverready

[SvelteKit](https://kit.svelte.dev) website for 2022 never ready conference organized by Klasse Digitale Grafik, HFBK Hamburg.

Live version: http://never-ready.hfbk.net
Text version: https://never-ready.netlify.app

## Workflow

1. Requirements
- `git` if you want to contribute to the project
- `node` and `npm` to compile and run the website

2. Download the project via git
```
git clone https://github.com/Klasse-Digitale-Grafik/never-ready.git
```

3. Install all node dependencies
```
npm install
```

4. Run development server with hot module replacement
```
npm run dev
```

5. Export static bundle
```
npm run build
```

6. Deploy
Upload all content of the `build` folder to your webserver.

## Where to edit stuff

- Pages `src/routes/...`
- Timetable `data/timetable.csv`
- Website Components (e.g. menu or footer) `src/lib/...`
- Global CSS `/static/global.css`
- Static images `static/images/...`

## Help

> If you have never worked with [Svelte](https://www.youtube.com/watch?v=rv3Yq-B8qp4) and SvelteKit before: Svelte is a JS compiler that makes it easier to make interactive interface with HTML, JS, CSS. SvelteKit is a framework that makes it easy to build real websites with Svelte. You might want to download a Svelte extension for your code editor ([VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)) or [Atom](https://atom.io/packages/ide-svelte)).