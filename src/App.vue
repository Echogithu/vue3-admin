<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Test></Test>
  <a-button type="primary">测试</a-button>
  <p class="test f22 bold mt18">测试全局样式</p>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Test from '@/components/Test.vue';
import request from '@/utils/axios';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Test,
  },
  setup() {
    onMounted(() => {
      request({
        url: '/api/list',
      }).then(res => {
        console.log(res);
      });
    });
  },
});
</script>

<style lang="scss">
.test {
  color: $success-color;
}
</style>
