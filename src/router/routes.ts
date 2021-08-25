import Layout from '@/layouts/index.vue';
import { RouteRecordRaw } from 'vue-router';
import { RouterTransition } from '@/components/common/transition';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: { title: '' },
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: '/home',
        component: RouterTransition,
        redirect: '/home/index',
        meta: { title: '首页', icon: 'icon-piechart' },
        children: [
          {
            name: 'Index',
            path: 'index',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '测试1', icon: 'icon-adduser' },
          },
          {
            name: 'Details',
            path: 'details',
            component: () => import('@/views/home/details.vue'),
            meta: { title: '测试2', icon: 'icon-adduser' },
          },
        ],
      },
      {
        name: 'Home2',
        path: '/home2',
        component: RouterTransition,
        redirect: '/home2/index',
        meta: { title: '首页', icon: 'icon-piechart' },
        children: [
          {
            path: 'index2',
            name: 'Index2',
            component: () => import('@/views/home/index.vue'),
            meta: { title: '测试1', icon: 'icon-adduser' },
          },
        ],
      },
    ],
  },
  {
    path: '/https://www.iconfont.cn/',
    name: 'https://www.iconfont.cn/',
    component: Layout,
    meta: { title: '导航3', icon: 'icon-linechart' },
  },
];
