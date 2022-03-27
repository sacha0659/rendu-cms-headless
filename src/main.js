import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { supabase } from './supabase';

import '@/scss/init.scss';

Vue.config.productionTip = false;
Vue.prototype.$supabase = supabase;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
