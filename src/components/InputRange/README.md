# Component Button

|Propriedade  | Tipo                        | Opcional  | Descrição |
|-------------|------------                 |---------- |---------- |
|minutes  |number                       | _false_     | minutos ao acionar o input         |
|handleSelectMinutes   |function                       | _false_     | função a ser executada no acionamento do input |

---

## Exemplo de implementação do Button

Importe em seu arquivo `.ts` ou `.tsx`
```typescript
import InputRange from 'src/components/InputRange';
```

Adicione o componente no retorno a ser renderizado
```html
<InputRange 
  minutes={minutes} 
  handleSelectMinutes={handleSelectMinutes} 
/>
```