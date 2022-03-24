# Component Button

|Propriedade  | Tipo                        | Opcional  | Descrição |
|-------------|------------                 |---------- |---------- |
|textButton  |string                       | _false_     | texto do botão          |
|colorButton   |```yellow``` ou ```green```                       | _false_     | estilização do botão |

---

## Exemplo de implementação do Button

Importe em seu arquivo `.ts` ou `.tsx`
```typescript
import { Button } from '../../src/components/Button';
```

Adicione o componente no retorno a ser renderizado
```html
<Button 
  titleButton='Titulo botão'
  colorButton='yellow'
/>
```