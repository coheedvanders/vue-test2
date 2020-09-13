import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import AuthenticationLayout from "./layouts/AuthenticationLayout.vue";
import ErrorLayout from "./layouts/ErrorLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

Vue.component('authentication-layout',AuthenticationLayout);
Vue.component('error-layout',ErrorLayout);
Vue.component('main-layout',MainLayout);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
