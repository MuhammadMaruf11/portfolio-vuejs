import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './routes'; // Assuming your routes are in a separate file

createApp(App)
    .use(router)
    .mount('#app');
