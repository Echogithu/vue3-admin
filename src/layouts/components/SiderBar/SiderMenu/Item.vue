<template lang="pug">
span(v-if="title") {{ title }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Item',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
</script>
