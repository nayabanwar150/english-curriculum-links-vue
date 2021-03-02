import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Admin from '../src/components/Admin.vue'
import Users from '../src/components/Users.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Users},
  {path: '/admin', component: Admin}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
