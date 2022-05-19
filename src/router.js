import VueRouter from 'vue-router';
// Pages

import HomeGreenCard from "./views/ideas/green-card/HomeGreenCard";


import GreenCardEvaluation from "./views/ideas/green-card/GreenCardEvaluation";
import GreenCardApplication from "./views/ideas/green-card/GreenCardApplication";
import GreenCardEvaluationContinued from "./views/ideas/green-card/GreenCardEvaluationContinued";
import GreenCardConfirmation from "./views/ideas/green-card/GreenCardConfirmation";
import GreenCardConfirmed from "./views/ideas/green-card/GreenCardConfirmed";


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
      { path: '/eligibility', name: 'eligibility', component: GreenCardEvaluationContinued, props: true },
      { path: '/confirmation', component: GreenCardConfirmation },
      { path: '/confirmed', component: GreenCardConfirmed },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page

    next();
})
