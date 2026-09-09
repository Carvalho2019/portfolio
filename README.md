# Portfolio de Clésio Carvalho

Portfolio pessoal de um full-stack developer, construído com Next.js, React, TypeScript e Sass.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` inicia o ambiente de desenvolvimento.
- `npm run lint` executa o ESLint.
- `npm run build` cria o build de produção.
- `npm run start` inicia a versão de produção.

## Estrutura

- `src/components`: secções reutilizáveis da página.
- `src/pages`: página principal, documento HTML e endpoints.
- `src/assets`: imagens importadas e processadas pelo Next.js.
- `public`: CV, favicon, sitemap e robots.txt.

Os projetos em destaque são mantidos no array de dados em `src/components/Work/index.tsx`.
Atualize títulos, descrições, tecnologias e URLs quando adicionar novos trabalhos.

O formulário de contacto abre um email pré-preenchido através do cliente de email do visitante.
Para usar um serviço transacional, substitua o handler em `src/components/Contact/index.tsx`
por um endpoint seguro e configure as variáveis de ambiente no provedor de deploy.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
