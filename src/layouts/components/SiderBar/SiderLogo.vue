<template lang="pug">
div.sider-logo.flex-center.color-333 
  img(src="@/assets/images/DMAI_logo@2x.png" width="58")
  span(v-show="!collapsed") 中心调度服务
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiderLogo',
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
.sider-logo {
  color: #333;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  img {
    margin-right: 11px;
  }
}
</style>
