# Component ButtonLink

|Propriedade  | Tipo                        | Opcional  | Descrição |
|-------------|------------                 |---------- |---------- |
|textButton  |string                       | _false_     | texto do botão          |
|colorButton   |```yellow``` ou ```green```                       | _false_     | estilização do botão |
|clickAncora   |string                       | _false_     | ancora ou URL do botão |

---

## Exemplo de implementação do ButtonLink

Importe em seu arquivo `.ts` ou `.tsx`
```typescript
import { Button } from '../../src/components/ButtonLink';
```

Adicione o componente no retorno a ser renderizado
```html
<ButtonLink 
  titleButton='Titulo botão'
  colorButton='yellow'
  clickAncora='#home'
/>
```