<template lang="pug">
div.app-header
  div
    //- 思考点击事件写在该组件是否适合
    CollapsedButton(@click="()=> $emit('update:collapsed', !collapsed)" :collapsed="collapsed")
    Breadcrumb
  AvatarMenu
</template>

<script lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import AvatarMenu from './AvatarMenu.vue';
import CollapsedButton from './CollapsedButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Breadcrumb, AvatarMenu, CollapsedButton },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  emits: ['update:collapsed'],
});
</script>

<style class="scss" scoped></style>
