# Component Header

|Propriedade  | Tipo                        | Opcional  | Descrição |
|-------------|------------                 |---------- |---------- |
|itemsMenu  |array                       | _false_     | itens a serem exibidos no menu         |

---

## Exemplo de implementação do Header

Importe em seu arquivo `.ts` ou `.tsx`
```typescript
import { Header } from '../../src/components/Header';

const itemsMenu = [
  {
    id: 1,
    title: 'Item Link',
    url: 'http://'
  },
  {
    id: 2,
    title: 'Item Ancora',
    url: '#ancora'
  }
```

Adicione o componente no retorno a ser renderizado
```html
 <Header 
  itemsMenu={itemsMenu}
 />
```