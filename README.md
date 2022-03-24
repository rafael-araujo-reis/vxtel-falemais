# VxTel | Plano Fale Mais
Aplicação desenvolvida para o processo seletivo da empresa **Vórtx**.

**Objetivo:** Calcular o preço do novo produto Fale+ entre dois DDDs, conforme os valores informados pelo cliente de origem, destino, plano e minutos em ligação e exibir ao cliente o valor gasto com e sem plano.

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

Obs: Para a execução do projeto, é necessário configurar e instanciar a [API VexTel](https://github.com/rafael-araujo-reis/api-vxtel#readme)


Primeiro baixe as dependências do projeto:
``` bash
npm install
```

Depois execute o projeto

```bash
npm run dev
# ou
yarn dev
```

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto local.

---

## Manutenção no projeto

## Components
A documentação dos componentes estão acessíveis abaixo:

* [Component Button](./src/components/Button/Readme.md)
* [Component ButtonLink](./src/components/ButtonLink/Readme.md)
* [Component Header](./src/components/Header/Readme.md)
* [Component SignButton](./src/components/SignButton/Readme.md)

## Hooks
Dentro do [usePlans.tsx](./src/hooks/usePlans.tsx) está localizada a lógica para busca dos DDDs e calculos dos planos da Vxtel na [API da VxTel](https://github.com/rafael-araujo-reis/api-vxtel#readme) e atualização dos dados.

## Páginas
As páginas do projeto se encontram dentro da pasta [pages](./src/pages/)

* O arquivo [_app_.tsx](./src/pages/_app.tsx) encontra-se o provedor de informações da aplicação e a importação do aquivo [global.scss](./src//styles/global.scss)
* O arquivo [_document.tsx](./src/pages/_document.tsx) encontra-se a estrutura do **index.html** e os imports das fontes e do **faviconVx.png** da página
* A página Home do projeto está dentro do arquivo [index.tsx](./src/pages/index.tsx). Ela será renderizada assim que a aplicação for acessada em [http://localhost:3000](http://localhost:3000)


## Serviços
O consumo da [API VxTel](https://github.com/rafael-araujo-reis/api-vxtel#readme) ocorre dentro do arquivo [api.ts](./src/services/api.ts).

O consumo da [Brasil API](https://brasilapi.com.br/docs#tag/DDD) ocorre dentro do arquivo [search-ddd.ts](./src/services/search-ddd.ts).

Para que a comunicação funcione é necessário que a aplicação API VxTel esteja instanciada e a Brasil API esteja disponível.

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
```

## Interface e Protótipo

A interface foi criada utilizando os princípios de UI, textos explicativos com princípios de UX Writing e responsividade para dispositivos Desktop, Tablet e Mobile.

Acesse aqui o [protótipo da aplicação](https://www.figma.com/file/nkit5VepJiYM57DZ5tDKoY/Vortx?node-id=4%3A131) e sua palheta de cores e tipografia.

---
_Obs: este projeto foi desenvolvido utilizado [Next.js](https://nextjs.org/)._

---