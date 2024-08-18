const app = Vue.createApp({
    data() {
        return {
            isDarkMode: false
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.className = this.isDarkMode ? 'dark' : 'light';
        }
    },
    mounted() {
        // Asignar clase inicial
        document.body.className = this.isDarkMode ? 'dark' : 'light';
    }
});

app.mount('#app');
