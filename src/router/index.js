import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'meetings',
  },
  {
    path: '/meetings',
    name: 'meetings',
    meta: { layout: 'main' },
    component: () =>
      import(/* webpackChunkName: "meetings" */ '../views/Meetings.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
