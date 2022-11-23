import VueRouter from 'vue-router';
// Pages

import HomeMemes from "./ideas/memes/HomeMemes";
import RegisterMemes from "./ideas/memes/RegisterMemes";

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: HomeMemes },
      { path: '/register', component: RegisterMemes },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page

    next();
})
