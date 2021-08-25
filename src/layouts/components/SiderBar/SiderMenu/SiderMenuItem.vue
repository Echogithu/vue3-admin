<template lang="pug">
template(v-if="!menuInfo.meta.hidden")
  a-sub-menu(v-if="menuInfo.children?.length" :key="menuInfo.name" v-bind="$attrs")
    template(#title)
      <icon-font :type="menuInfo.meta.icon" />
      Item(v-if="menuInfo.meta" :title="menuInfo.meta.title")
    sider-menu-item(v-for="child in menuInfo.children" :menuInfo="child" :key="child.name")
  template(v-else)
    a-menu-item(:key="menuInfo.name")
      <icon-font :type="menuInfo.meta.icon" />
      Item(v-if="menuInfo.meta" :title="menuInfo.meta.title")
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Item from './Item.vue';
import { IconFont } from '@/components/common/IconFont';

export default defineComponent({
  name: 'SiderMenuItem',
  components: { Item, IconFont },
  props: {
    menuInfo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log('object :>> ', props.menuInfo);
  },
});
</script>
