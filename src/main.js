import Vue from 'vue'

import '@/styles/index.styl'  // global css

import App from './App.vue'
import router from '@/router'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
})
