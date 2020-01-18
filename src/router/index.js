import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './router'

Vue.use(VueRouter)

export default new VueRouter({
  routes,
  linkActiveClass:"active",
  //mode:'history'  // 不带hash
})