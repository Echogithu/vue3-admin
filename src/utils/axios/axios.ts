const VueAxios = {
  installed: false,
  vm: {},
  install(Vue: VueApp, instance: any) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    if (!instance) {
      // eslint-disable-next-line no-console
      console.error('You have to install axios');
      return;
    }

    // Vue.config.globalProperties.$axios = instance

    Object.defineProperties(Vue.config.globalProperties, {
      axios: {
        get: function get() {
          return instance;
        },
      },
      $http: {
        get: function get() {
          return instance;
        },
      },
    });
  },
};

export { VueAxios };
