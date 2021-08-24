<template lang="pug">
div.sider-logo logo
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiderLogo',
});
</script>

<style lang="scss" scoped>
.sider-logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
