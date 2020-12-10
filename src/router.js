import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: Home }
    ]
});