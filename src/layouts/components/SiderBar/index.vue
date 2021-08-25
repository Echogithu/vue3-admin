<template lang="pug">
div
  sider-logo(:collapsed="collapsed")
  sider-menu(:collapsed="collapsed")
</template>

<script lang="ts">
import SiderLogo from './SiderLogo.vue';
import SiderMenu from './SiderMenu/index.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiderBar',
  components: { SiderLogo, SiderMenu },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
});
</script>

<style class="scss" scoped></style>
