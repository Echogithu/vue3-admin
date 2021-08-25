<template lang="pug">
div
  router-view(v-slot="{ Component}")
    transition(name="zoom-fade" mode="out-in" appear)
      keep-alive
        component(:is="Component")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RouterTransition',
});
</script>
