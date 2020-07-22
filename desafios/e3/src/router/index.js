import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lista-ramais',
    name: 'lista-ramais',
    meta: {
      icon: 'list-ul', title: 'Lista Ramais'
    },
    component: () => import(/* webpackChunkName: "lista-ramais" */
      '../pages/lista-ramais/ListaRamais')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Desafio`

  if (!window.uid && to.name !== 'lista-ramais') {
    next({ name: 'lista-ramais' })
  } else {
    next()
  }
})

export default router
