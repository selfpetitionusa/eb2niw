import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';
import Profile from './views/Profile';
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from "./views/Dashboard";
import PhotoPopup from "./views/PhotoPopup";

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: Home },
      { path: '/tutor/:token', component: Profile },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/dashboard', component: Dashboard },
      { path: '/photopopup', component: PhotoPopup },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/", '/login', '/register', '/tutor/:token', '/photopopup' ];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    console.log(loggedIn);

    if (authRequired && !loggedIn) {
        console.log("pajacasdasdasdada")
        return next('/login');
    }

    next();
})
