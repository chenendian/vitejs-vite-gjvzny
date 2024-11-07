import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');

export default class TestHmr {
  constructor() {
    const app = createApp(App);
    app.mount('#app1');
  }
}
