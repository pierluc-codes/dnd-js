import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import App from './App'

import 'bulma/css/bulma.css'

Vue.use(VueFirestore)

new Vue({
  el: '#app',
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept()
}
