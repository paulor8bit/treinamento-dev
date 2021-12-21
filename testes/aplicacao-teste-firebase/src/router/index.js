import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      icon: 'home', title: 'Home'
    },
    component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home')
  },
  {
    path: '/lista-gastos',
    name: 'lista-gastos',
    meta: {
      icon: 'list-ul', title: 'Lista Gastos'
    },
    component: () => import(/* webpackChunkName: "lista-gastos" */
      '../pages/lista-gastos/ListaGastos')
  },
  {
    path: '/lista-ramais',
    name: 'lista-ramais',
    meta: {
      icon: 'list-ul', title: 'Lista Ramais'
    },
    component: () => import(/* webpackChunkName: "lista-ramais" */
      '../pages/lista-ramais/ListaRamais')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'Login'
    },
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Expenses`

  if (!window.uid && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
