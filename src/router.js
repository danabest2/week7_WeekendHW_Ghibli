import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    }
  ]
})

export default router;
