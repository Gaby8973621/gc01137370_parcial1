const { createApp, ref } = Vue;

const App = {
  template: `
    <div style="text-align: center; margin-top: 50px;">
      <h1>Calculadora Sencilla</h1>
      <input type="number" v-model.number="num1" placeholder="Número 1" />
      <input type="number" v-model.number="num2" placeholder="Número 2" />
      
      <div style="margin-top: 20px;">
        <button @click="sumar">Sumar</button>
        <button @click="restar">Restar</button>
        <button @click="multiplicar">Multiplicar</button>
        <button @click="dividir">Dividir</button>
      </div>
      
      <h2 style="margin-top: 20px;">Resultado: {{ resultado }}</h2>
    </div>
  `,
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const resultado = ref(0);

    const sumar = () => {
      resultado.value = num1.value + num2.value;
    };

    const restar = () => {
      resultado.value = num1.value - num2.value;
    };

    const multiplicar = () => {
      resultado.value = num1.value * num2.value;
    };

    const dividir = () => {
      if (num2.value !== 0) {
        resultado.value = num1.value / num2.value;
      } else {
        resultado.value = 'Error: División por cero';
      }
    };

    return {
      num1,
      num2,
      resultado,
      sumar,
      restar,
      multiplicar,
      dividir
    };
  }
};

createApp(App).mount('#app');
