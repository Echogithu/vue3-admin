import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import { VueAxios } from './utils/axios';
import antd from './plugins/antd';
import './assets/styles/index.scss';
import '@/mock';

createApp(App).use(router).use(store).use(VueAxios).use(antd).mount('#app');
