import Vue from 'vue'
import App from './Hello'

import 'bulma/css/bulma.css'

new Vue({
  el: '#app',
  render: h => h(App)
});

if (module.hot) {
  module.hot.accept();
}
