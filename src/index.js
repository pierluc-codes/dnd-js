import Vue from 'vue'
import App from './Hello'

new Vue({
  el: '#app',
  render: h => h(App)
});

if (module.hot) {
  module.hot.accept();
}
