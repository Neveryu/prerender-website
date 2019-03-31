import Vue from 'vue'
import MetaInfo from 'vue-meta-info'
import metaInfoMixin from '@/util/meta-info'

import '@/styles/index.styl'  // global css

import App from './App.vue'
import router from '@/router'

// mixin for handling meta-info
Vue.mixin(metaInfoMixin)

Vue.use(MetaInfo)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
    setTimeout(console.log.bind(console, '20190331 16:10'), 1000)
    setTimeout(console.log.bind(console, 'qq群：685486827'), 2000)
  }
})
