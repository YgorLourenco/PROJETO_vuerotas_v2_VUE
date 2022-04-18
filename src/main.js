import Vue from 'vue'
import App from './App.vue'

// importar sempre o router para usa-lo
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


