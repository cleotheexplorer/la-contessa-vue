import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto');

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


new Vue({
  render: h => h(App),
}).$mount('#app')