<template lang="pug">
div.app-header
  Breadcrumb
  AvatarMenu
</template>

<script lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import AvatarMenu from './AvatarMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Breadcrumb, AvatarMenu },
});
</script>

<style class="scss" scoped></style>
