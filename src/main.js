// import './set-public-path';
import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';
import router from '@/router';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#submodule',
    render: h => h(App),
    router
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
