import Vue from 'vue'
import App from './App.vue'
import router from './router'
import lny from './lny.js'

Vue.config.productionTip = false

import "tailwindcss/dist/tailwind.css"

Vue.use(lny)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
