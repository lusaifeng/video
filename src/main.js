import _ from 'lodash'
import $ from 'jquery'
global.$ = $

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../scss/style.scss'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
