import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage.vue'
import all from '../components/all/all.vue'
import cart from '../components/cart/cart.vue'
import stroll from '../components/stroll/stroll.vue'
import userCenter from '../components/userCenter/userCenter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: homepage
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/userCenter',
      component: userCenter
    }
  ]
})
