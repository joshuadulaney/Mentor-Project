import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Tanking from './components/Tanking'
import FeralDPS from './components/FeralDPS'
import MoonkinDPS from './components/MoonkinDPS'
import Healing from './components/Healing'
import TalentCalculator from './components/TalentCalculator';


Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path:"/", component:HelloWorld},
  {path:"/tanking", component:Tanking},
  {path:"/feraldps", component:FeralDPS},
  {path:"/moonkindps", component:MoonkinDPS},
  {path:"/healing", component:Healing},
  {path:"/talentcalculator", component:TalentCalculator}
];

const router = new VueRouter({
  base: "/",
  routes
});

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');

