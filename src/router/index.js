import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/timesheet/:year/:week',
    name: 'Timesheet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Timesheet.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Timesheet' && localStorage.getItem('token') === null) next({ name: 'Home' });
      else next();
    },
    beforeRouteUpdate: (to, from, next) => {
      alert(to.name);
      if (to.name === 'Timesheet' && localStorage.getItem('token') === null) next({ name: 'Home' });
      else next();
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
