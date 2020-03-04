import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import { ApiPlugin } from '@/plugins';

import '@/assets/css/tailwind.css';

Vue.use(ApiPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
