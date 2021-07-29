import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Cadastro from '../views/Cadastro.vue'
import Editar from '../views/Editar.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/cadastro',
    name: 'cadastror',
    component: Cadastro
  },
  {
    path: '/editar',
    name: 'editar',
    component: Editar
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (!routeTo.meta.publica && !store.state.token) {
    return next({
      path:'/login'
    });
  }
  next();
})


export default router
