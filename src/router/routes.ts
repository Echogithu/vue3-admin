import Layout from '@/layouts/index.vue';
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: { title: '导航', icon: 'icon-menu' },
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/index/home.vue'),
        meta: { title: '首页', icon: 'icon-piechart' },
      },
      {
        path: 'details',
        name: 'Details',
        component: () => import('@/views/index/details.vue'),
        meta: { title: '测试', icon: 'icon-adduser' },
      },
    ],
  },
  {
    path: '/test3',
    component: Layout,
    meta: { title: '导航3', icon: 'icon-linechart' },
    name: 'Test3',
  },
];
