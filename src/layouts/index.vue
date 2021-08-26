<template lang="pug">
a-layout.layout-container(style="height:100vh")
  a-layout-sider(:width="asiderWidth" :trigger="null" collapsible theme="light"  v-model:collapsed="collapsed")
    sider-bar(:collapsed="collapsed")
  a-layout
    a-layout-header.app-header.bg-white
      page-header(v-model:collapsed="collapsed")
    a-layout-content.app-content
      div.app-content-card
        router-view
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import PageHeader from './components/Header/index.vue';
import SiderBar from './components/SiderBar/index.vue';
import layoutVar from '@/assets/styles/layout.module.scss';

export default defineComponent({
  name: 'Layouts',
  components: { PageHeader, SiderBar },
  setup() {
    let collapsed = ref(false);

    let asiderWidth = computed(() => (collapsed.value ? layoutVar.siderCollapsedWidth : layoutVar.siderBarWidth));

    // const update = () => {
    //   collapsed.value = !collapsed.value;
    // };

    return {
      collapsed,
      asiderWidth,
    };
  },
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
  .app-content {
    background: #f0f2f5;
    padding: 24px;
    &-card {
      width: 100%;
      height: 100%;
      background: #fff;
    }
  }
}
</style>
