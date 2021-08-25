<template lang="pug">
template(v-if="!menuInfo.meta.hidden")
  a-sub-menu(v-if="menuInfo.children?.length" :key="menuInfo.name" v-bind="$attrs")
    template(#title)
      span
        icon-font(:type="menuInfo.meta.icon")
        Item(v-if="menuInfo.meta" :title="menuInfo.meta.title")
    template(v-for="child in menuInfo.children" :key="child.name")
      template(v-if="!child.children")
        a-menu-item(:key="child.name")
          icon-font(:type="child.meta.icon")
          Item(v-if="child.meta" :title="child.meta.title")
      template(v-else)
        sider-menu-item(:menuInfo="child" :key="child.name")
  template(v-else)
    a-menu-item(:key="menuInfo.name")
      icon-font(:type="menuInfo.meta.icon")
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
