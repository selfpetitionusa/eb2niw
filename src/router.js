import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';
import ProfileView from './views/ProfileView';
import EditProfileView from './views/EditProfileView';
import Login from './views/Login'
import Register from './views/Register'


export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: Home },
      { path: '/tutor/:token', component: ProfileView },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/dashboard', component: EditProfileView },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/", '/login', '/register', '/photopopup'];
    const publicPrefixes = ["/tutor" ];
    const authRequired = !publicPages.includes(to.path) && !publicPrefixes.some(prefix => to.path.startsWith(prefix));
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})
