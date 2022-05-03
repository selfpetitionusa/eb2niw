import VueRouter from 'vue-router';
// Pages

import HomeGreenCard from "./views/ideas/green-card/HomeGreenCard";


import GreenCardEvaluation from "./views/ideas/green-card/GreenCardEvaluation";
import GreenCardApplication from "./views/ideas/green-card/GreenCardApplication";


export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: HomeGreenCard },
      { path: '/green-card-evaluation', component: GreenCardEvaluation },
      { path: '/green-card-application', component: GreenCardApplication },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page

    next();
})
