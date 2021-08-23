import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import antd from './plugins/antd';

createApp(App).use(router).use(store).use(antd).mount('#app');
