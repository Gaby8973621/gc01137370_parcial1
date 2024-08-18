// Define el componente 'variable-watcher'
Vue.component('variable-watcher', {
    props: {
      watchedValue: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        message: ''
      };
    },
    watch: {
      // Watcher para 'watchedValue'
      watchedValue(newValue, oldValue) {
        this.message = `El valor ha cambiado de "${oldValue}" a "${newValue}"`;
      }
    },
    template: `
      <div>
        <p>{{ message }}</p>
      </div>
    `
  });
  
  // Crea una nueva instancia de Vue
  new Vue({
    el: '#app',
    data: {
      watchedValue: ''
    }
  });
  