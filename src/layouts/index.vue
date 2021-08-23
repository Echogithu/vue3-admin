<template lang="pug">
a-layout.layout-container(style="height:100vh")
  a-layout-sider
  a-layout
    a-layout-header.app-header.bg-white
      page-header
    a-layout-content
      router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from './components/Header/index.vue';

export default defineComponent({
  name: 'Layouts',
  components: { PageHeader },
});
</script>

<style lang="scss" scoped>
.layout-container {
  .app-header {
    width: 100%;
    height: $appHeaderHeight;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
