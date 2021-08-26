<template lang="pug">
icon-font.cp(:type="collapsed ? 'icon-indent' : 'icon-outdent'" :style="{fontSize: '22px'}")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IconFont } from '@/components/common/IconFont';

export default defineComponent({
  name: 'CollapsedButton',
  components: { IconFont },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
});
</script>
