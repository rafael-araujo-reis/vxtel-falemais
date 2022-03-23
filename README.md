This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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





===============================================================


# VxTel | Plano Fale Mais
Aplicação desenvolvida para o processo seletivo da empresa **Vórtx**.

**Objetivo:** Calcular o valor entre dois DDDs, conforme os valores informados pelo cliente de origem, destino, plano e minutos em ligação

Consumir os GETs das APIs [API VxTel](https://github.com/rafael-araujo-reis/api-vxtel#readme) e da [Brasil API](https://brasilapi.com.br/docs#tag/DDD)

Construção do layout responsivo, base de dados, API VxTel e disponibilização dos dados retornados.

### Tecnologias utilizadas
* React
* NextJS
* NodeJS
* TypeScript
* Sass 

_**Developer:** Rafael Araujo Reis_

---
## Inicializando o projeto

Para a execução do projeto, é necessário configurar e instanciar a [API VexTel](https://github.com/rafael-araujo-reis/api-vxtel#readme)



Primeiro baixe as dependências do projeto:
``` bash
npm install
```

Acesse conta da [Marvel](https://developer.marvel.com/account) e pegue as chaves ***public key*** e a ***private key***.

Crie na raiz do projeto o arquivo ```.env.local``` e informme as chaves ***public key*** e a ***private key*** da conta [Marvel](https://developer.marvel.com/account)
  * NEXT_PUBLIC_MARVEL_PUBLIC_KEY=_informe sua public key_
  * NEXT_PUBLIC_MARVEL_PRIVATE_KEY=_informe sua private key_

Depois execute o projeto

```bash
npm run dev
# ou
yarn dev
```

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto local.

---

## Editando no projeto

## Components
A documentação dos componentes estão acessíveis abaixo:

* [Component Button](./src/components/Button/Readme.md)
* [Component Card](./src/components/Card/Readme.md)
* [Component Header](./src/components/Header/Readme.md)

## Hooks
Dentro do [useHeroes.tsx](./src/hooks/useHeroes.tsx) está localizada a lógica para buscar os heróis na [API da Marvel](https://developer.marvel.com/docs) e atualização dos dados.

## Páginas
As páginas do projeto se encontram dentro da pasta [pages](./src/pages/)

* O arquivo [_app_.tsx](./src/pages/_app.tsx) encontra-se o provedor de informações da aplicação e a importação do aquivo [global.scss](./src//styles/global.scss)
* O arquivo [_document.tsx](./src/pages/_document.tsx) encontra-se a estrutura do **index.html** e os imports das fontes e do **favicon.ico** da página
* A página Home do projeto está dentro do arquivo [index.tsx](./src/pages/index.tsx). Ela será renderizada assim que a aplicação for acessada em [http://localhost:3000](http://localhost:3000)


## Serviços
O consumo da [API da Marvel](https://developer.marvel.com/docs) ocorre dentro do arquivo [api.ts](./src/services/api.ts)

* Para que a comunicação funcione é necessário as chaves ***public key*** e a ***private key*** da conta [Marvel](https://developer.marvel.com/account).

_(sempre após a alteração do arquivo .env.local, é necessário parar a execução do projeto e inicializar novamente)_

## Estilização
A estilização global do projeto se encontra no arquivo [global.scss](./src//styles/global.scss)
```scss
/********************
 * Reduzindo o tamanho da fonte padrão para desktop de 16px para 10px
 *******************/
html {
  font-size: 62.5%;
}

/********************
 * Reduzindo o tamanho da fonte padrão para tablet de 16px para  9px
 *******************/
@media (max-width: 1080px) {
  html {
    font-size: 56.25%;
  }
}

/********************
 * Reduzindo o tamanho da fonte padrão para mobile de 16px para  8px
 *******************/
@media (max-width: 720px) {
  html {
    font-size: 50%;
  }
}