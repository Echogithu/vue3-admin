import { App, VNodeChild } from 'vue';

import { Button } from 'ant-design-vue';

export default {
  install: (app: App<Element>): VNodeChild => {
    [Button].forEach(plugin => {
      app.use(plugin);
    });
  },
};
