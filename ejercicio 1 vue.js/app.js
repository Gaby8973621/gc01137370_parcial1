// Importar las funciones necesarias de Vue.js
const { createApp, reactive, computed } = Vue;

// Definir el componente WelcomeMessage
const WelcomeMessage = {
    template: `
        <div>
            <h1>{{ message }}</h1>
            <input v-model="state.name" placeholder="Enter your name" />
        </div>
    `,
    setup() {
        // Usar el método reactive para almacenar el nombre
        const state = reactive({
            name: ''
        });

        // Computar el mensaje de bienvenida
        const message = computed(() => {
            return state.name ? `Welcome, ${state.name}!` : 'pon tu nombre.';
        });

        return {
            state,
            message
        };
    }
};

// Crear y montar la aplicación
createApp(WelcomeMessage).mount('#app');
