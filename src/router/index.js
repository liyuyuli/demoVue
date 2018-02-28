
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import About from '../views/About'
import Home from '../views/Home'
export default new VueRouter({
//  配置多个路由
  routes:[
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,}
  ]
})
