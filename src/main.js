import { createApp } from 'vue';
import VueClipboard from 'vue3-clipboard'
import App from './App.vue';
import "./main.css";

createApp(App).use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
}).mount('#app');
