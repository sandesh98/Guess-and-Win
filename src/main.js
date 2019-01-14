import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Team from './components/Team.vue'
import Intro from './components/Intro.vue'
import Switch from './components/Switch.vue'
import Turn from './components/Turn.vue'
import Words from './components/Words.vue'
import Countdown from './components/Countdown.vue'
import Dice from './components/Dice.vue'
import Steps from './components/Steps.vue'
import Final from './components/Final.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/intro', component: Intro },
  { path: '/switch', component: Switch },
  { path: '/turn', component: Turn },
  { path: '/words', component: Words },
  { path: '/countdown', component: Countdown },
  { path: '/dice', component: Dice },
  { name: 'steps', path: '/steps/:result', component: Steps },
  { path: '/final', component: Final }
];

const teams = [
  {name: 'Geel', score: 0, guessed: 0},
  {name: 'Groen', score: 0, guessed: 0},
  {name: 'Blauw', score: 0, guessed: 0},
  {name: 'Paars', score: 0, guessed: 0}
];

const words = ['Slack', 'Dopper', 'Adolf Hitler', 'Hans Kazan', 'Donald Duck', 'The Caveman', 'Gavin Rajah', 'Route 66', 'Koning Willem I', 'Noord-Korea', 'The pink panther', 'Calvé', 'Zimbabwe', 'Peter Heerschop', 'Puma', 'Jumbo', 'De Eifeltoren', 'UPC', 'Michael Phelps', 'Europa', 'De dijk', 'Channing Tatum', 'Finding Nemo', 'Holland’s Got Talent', 'Sprinter', 'Moederdag', 'Jip en Janneke ', 'De Rijn', 'Linda de Mol	', 'Golden Earring', 'Bahama’s', 'Roompot', 'Giraf', 'Dennenboom', 'Kerstman', 'Luxemburg', 'Macaroni', 'Goudvis', 'Wallmart', 'Halloween', 'Printer', 'Marrakesh', 'Sunday', 'Gijs van Staverman', 'Samsung', 'Boterham', 'Kaapstad', 'John de Wolf', 'Zuiderpark', 'SSD', 'Adidas', 'Fred van Leer', 'Taiwan', 'FIFA', 'Boeddha', 'Griepprik', 'Lichaam', 'Den Haag', 'Louis Armstrong', 'Donald Trump', 'Haarlem', 'Elvis Presley', 'Waddeneilanden', 'Gordijnen', 'Stift', 'Alkmaar', 'Mick Jagger', 'Blaten', 'Kapstok', 'Keukenrolhouder', 'Amazone', 'Groningen', 'Prinsjesdag', 'Popcorn', 'Msn', 'Middelburg', 'Gemeente', 'Frappant', 'De Rotterdam', 'Mediamarkt', 'Twitter', 'Nissan', 'Bram Mosczkowicz', 'Bitcoin', 'Londen Eye', 'Frank de Boer', 'Google', 'Spongebob', 'Intertoys', 'Vodka', 'Frans timmerman', 'Dracula', 'Pantalon', 'Wasknijper', 'Zwitserland', 'Sacha de Boer', 'Dionne Stax', 'Berlijn', 'Hugo Boss', 'Zadkine', 'Arjen Robbe', 'Raamkozijn', 'Big Ben', 'CIA', 'Pepsi', 'Sleutel', 'Snelweg', 'Andre Hazes', 'New Delhi', 'Croissant', 'Ronnie Flex', 'Caïro', 'Javascript', 'Attractiepark Slagharen', 'Viking', 'Glennis Grace', 'Rome', 'Google', 'Twente', 'Puma', 'Anita Meyer', 'Crocs', 'Assepoester', 'Hoesten', 'Pingen', 'Robert ten Brink', 'Marokko', 'Venus', 'IBM', 'Vrede'];

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
    this.$router.words = words;

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