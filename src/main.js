import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Team from './components/Team.vue'
import Intro from './components/Intro.vue'
import Switch from './components/Switch.vue'
import Turn from './components/Turn.vue'
import Words from './components/Words.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/intro', component: Intro },
  { path: '/switch', component: Switch },
  { path: '/turn', component: Turn},
  { path: '/words', component: Words}
];

const teams = [
  {name: 'Geel', score: 0, guessed: 0},
  {name: 'Groen', score: 0, guessed: 0},
  {name: 'Blauw', score: 0, guessed: 0},
  {name: 'Paars', score: 0, guessed: 0}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  beforeMount() {
    this.$router.teams = teams;
    this.$router.teamSize = teams.length;
    this.$router.curTeamInt = 0;
    this.$router.curTeam = this.$router.teams[this.$router.curTeamInt]

    this.$router.nextTeam = () => {
      this.$router.curTeam.guessed = 0;

      this.$router.curTeamInt++;

      if ((this.$router.curTeamInt + 1) > this.$router.teamSize) {
        this.$router.curTeamInt = 0;
      }

      this.$router.curTeam = this.$router.teams[this.$router.curTeamInt];
    }
  },
  render: h => h(App)
}).$mount('#app')