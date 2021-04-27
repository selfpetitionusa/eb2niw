import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { store } from './store'
import { BootstrapVue } from 'bootstrap-vue';
import VueFeather from 'vue-feather';
import VueScrollTo from 'vue-scrollto'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { router } from './router';
import './assets/style/custom.scss';
import VueMeta from 'vue-meta'


Vue.config.productionTip = false;



library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo,  {
  offset: -92,
});

Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(VueRouter);
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
