import './scss/main.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'

import card from './components/card/card.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/card', component: card }
]

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h=>h(app),
  router: router
}).$mount("#app");
