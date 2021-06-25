import { createApp } from 'vue';
import VueClipboard from 'vue3-clipboard'
import App from './App.vue';
import './assets/app.css';

createApp(App).use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
  }).mount('#app');
