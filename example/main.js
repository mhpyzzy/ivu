// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ivuCss from '../src/style/ivu.css' 
import * as ivu from '../src'

Vue.config.productionTip = false

Vue.use(ivu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
