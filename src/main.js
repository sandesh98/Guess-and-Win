import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Team from './components/Team.vue'
import Intro from './components/Intro.vue'
import Switch from './components/Switch.vue'
import Turn from './components/Turn.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/intro', component: Intro },
  { path: '/switch', component: Switch },
  { path: '/turn', component: Turn}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')