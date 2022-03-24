# Component BoxAlert

|Propriedade  | Tipo                        | Opcional  | Descrição |
|-------------|------------                 |---------- |---------- |
|hasCoverage  |boolean                       | _false_     | box deverá ser exibido ou não          |
|type  | ```error``` ou ```info```                       | _true_     | tipo de box alerta         |
|message  |string                       | _true_     | mensagem a ser exibida no box alert          |

---

## Exemplo de implementação do BoxAlert

Importe em seu arquivo `.ts` ou `.tsx`
```typescript
import BoxAlert from 'src/components/BoxAlert';
```

Adicione o componente no retorno a ser renderizado
```html
<BoxAlert
  message={hasCoverage.message}
  hasCoverage={hasCoverage.hasCoverage}
  type={hasCoverage.type}
/>
```