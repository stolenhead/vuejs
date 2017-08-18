import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'
Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  routes: [
    {
      name: 'Mapa',
      path: '/',
      component: require('../components/Mapa')
    }
  ]