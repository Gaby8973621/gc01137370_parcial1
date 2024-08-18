// Define el componente 'input-alert'
Vue.component('input-alert', {
    data() {
      return {
        inputValue: ''
      };
    },
    methods: {
      showAlert() {
        alert(`El valor del input es: ${this.inputValue}`);
      }
    },
    template: `
      <div>
        <input v-model="inputValue" placeholder="Escribe algo">
        <button @click="showAlert">Mostrar Alerta</button>
      </div>
    `
  });
  
  // Crea una nueva instancia de Vue
  new Vue({
    el: '#app'
  });
  