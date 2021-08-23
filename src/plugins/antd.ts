import { App, VNodeChild } from 'vue';

import { Button, Dropdown, Layout, Avatar, Menu } from 'ant-design-vue';

export default {
  install: (app: App<Element>): VNodeChild => {
    [Button, Layout, Dropdown, Avatar, Menu].forEach(plugin => {
      app.use(plugin);
    });
  },
};
