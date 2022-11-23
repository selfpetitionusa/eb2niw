import VueRouter from 'vue-router';
// Pages

import HomeGreenCard from "./ideas/green-card/HomeGreenCard";

import HomeGreenCardServices from "./ideas/green-card/HomeGreenCardServices";
import HomeGreenCardProcess from "./ideas/green-card/HomeGreenCardProcess";
import HomeGreenCardTestimonials from "./ideas/green-card/HomeGreenCardTestimonials";
import HomeGreenCardAboutUs from "./ideas/green-card/HomeGreenCardAboutUs";
import GreenCardEvaluation from "./ideas/green-card/GreenCardEvaluation";
import GreenCardApplication from "./ideas/green-card/GreenCardApplication";
import GreenCardEvaluationContinued from "./ideas/green-card/GreenCardEvaluationContinued";
import GreenCardConfirmation from "./ideas/green-card/GreenCardConfirmation";
import GreenCardConfirmed from "./ideas/green-card/GreenCardConfirmed";
import GreenCardOrdered from "./ideas/green-card/GreenCardOrdered";
import GreenCardFAQ from "./ideas/green-card/GreenCardFAQ";

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: HomeGreenCard },
      { path: '/starterkit', component: HomeGreenCardServices },
      { path: '/process', component: HomeGreenCardProcess },
      { path: '/testimonials', component: HomeGreenCardTestimonials },
      { path: '/aboutus', component: HomeGreenCardAboutUs },
      { path: '/green-card-evaluation', component: GreenCardEvaluation },
      { path: '/green-card-application', component: GreenCardApplication },
      { path: '/eligibility', name: 'eligibility', component: GreenCardEvaluationContinued, props: true },
      { path: '/confirmation', component: GreenCardConfirmation },
      { path: '/confirmed', component: GreenCardConfirmed },
      { path: '/faq', component: GreenCardFAQ },
      { path: '/ordered', component: GreenCardOrdered },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page

    next();
})
