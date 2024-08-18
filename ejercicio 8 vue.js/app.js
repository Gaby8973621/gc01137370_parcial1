// Define el componente globalmente
Vue.component('conditional-message', {
    props: {
      isTrue: {
        type: Boolean,
        required: true
      }
    },
    template: `
      <div>
        <p v-if="isTrue">La condición es verdadera.</p>
        <p v-else>La condición es falsa.</p>
      </div>
    `
  });
  
  // Crea una nueva instancia de Vue
  new Vue({
    el: '#app',
    data: {
      condition: true
    },
    methods: {
      toggleCondition() {
        this.condition = !this.condition;
      }
    }
  });
  