import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld1 from '@/components/HelloWorld1';
import NotFound from '@/components/404';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sub',
      component: HelloWorld
    },
    {
      path: '/sub/ss',
      component: HelloWorld1
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
