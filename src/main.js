import Vue from 'vue'
import Home from './Home.vue'
import VeeValidate from 'vee-validate';  
Vue.use(VeeValidate);  
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Home),
}).$mount('#home')
