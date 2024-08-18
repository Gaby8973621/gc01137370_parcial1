const { createApp, ref } = Vue;

const App = {
    setup() {
        const messageVisible = ref(false);

        const toggleMessage = () => {
            messageVisible.value = !messageVisible.value;
        };

        return {
            messageVisible,
            toggleMessage
        };
    }
};

createApp(App).mount('#app');
