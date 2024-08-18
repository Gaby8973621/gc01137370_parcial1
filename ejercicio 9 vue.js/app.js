// Define el componente 'full-name'
Vue.component('full-name', {
    props: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      }
    },
    computed: {
      // Propiedad computada que combina nombre y apellido
      fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    },
    template: `
      <div>
        <p>Nombre completo: {{ fullName }}</p>
      </div>
    `
  });
  
  // Crea una nueva instancia de Vue
  new Vue({
    el: '#app',
    data: {
      firstName: 'Juan',
      lastName: 'Pérez'
    }
  });
  