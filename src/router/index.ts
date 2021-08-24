import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: { title: '导航' },
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/index/home.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/details',
        name: 'Details',
        component: () => import('@/views/index/details.vue'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
