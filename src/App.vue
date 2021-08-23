<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Test></Test>
  <a-button type="primary">测试</a-button>
  <p class="test f22 bold mt18">测试全局样式</p>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Test from '@/components/Test.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Test,
  },
});
</script>

<style lang="scss">
.test {
  color: $success-color;
}
</style>
