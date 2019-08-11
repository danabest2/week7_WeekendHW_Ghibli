import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'
import App from './App.vue'
import router from './router'

Vue.use(VueGoogleCharts)
Vue.config.productionTip = false

export const eventBus = new Vue ();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
