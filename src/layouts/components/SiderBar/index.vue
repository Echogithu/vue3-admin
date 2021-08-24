<template lang="pug">
div
  sider-logo
</template>

<script lang="ts">
import SiderLogo from './SiderLogo.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SiderBar',
  components: { SiderLogo },
});
</script>

<style class="scss" scoped></style>
