<template lang="pug">
a-menu(v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" :inline-collapsed="collapsed" mode="inline" theme="light" @click="clickMenuItem")
  template(v-for="item in routes" :key="item.name")
    sider-menu-item(:menuInfo="item")
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import SiderMenuItem from './SiderMenuItem.vue';
import { routes } from '@/router/routes';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SiderMenu',
  components: { SiderMenuItem },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  setup(props) {
    // 当前路由
    const currentRoute = useRoute();
    const router = useRouter();
    const store = useStore();

    // 获取当前打开的子菜单
    const getOpenKeys = () => [currentRoute.matched[0]?.name];

    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    });

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      newVal => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == 'login' || props.collapsed) return;
        state.openKeys = getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      }
    );

    // 点击菜单
    const clickMenuItem = ({ key }: any) => {
      if (/http(s)?:/.test(key)) {
        window.open(key);
      } else {
        router.push({ name: key });
      }
    };

    return {
      routes,
      state,
      clickMenuItem,
    };
  },
});
</script>
