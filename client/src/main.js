import Vue from 'vue'
import App from './App.vue'
import Primus from 'primusfront'
import store from './store'

Vue.config.productionTip = false

Vue.use(Primus, {
  Global: { defaultDesign: 'vuetify' },
  API: {
    axiosConnector: {one: 1},
    apolloConnector: {two: 2},
    defaultConnector: 'apollo'
  }
})


new Vue({
  render: h => h(App), 
  store
}).$mount('#app')
