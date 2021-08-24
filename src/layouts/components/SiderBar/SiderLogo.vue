<template lang="pug">
div.sider-logo.flex-center.color-333 
  img(src="@/assets/images/DMAI_logo@2x.png" width="58")
  span 中心调度服务前端
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiderLogo',
});
</script>

<style lang="scss" scoped>
.sider-logo {
  color: #333;
  font-size: 20px;
  line-height: 60px;
  img {
    margin-right: 11px;
  }
}
</style>
