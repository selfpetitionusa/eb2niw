import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';
import ProfileView from './views/ProfileView';
import EditProfileView from './views/EditProfileView';
import Preview from './views/Preview';
import Help from './views/Help';
import Account from './views/Account';
import Login from './views/Login';
import Register from './views/Register';
import PasswordReset from './views/PasswordReset';
import BasicInfo from './views/account/BasicInfo';
import AccountPasswordReset from './views/account/AccountPasswordReset';
import ProfileLink from './views/account/ProfileLink';


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
      { path: '/password-reset', component: PasswordReset },
      { path: '/dashboard', component: EditProfileView },
      { path: '/preview', component: Preview },
      { path: '/help', component: Help },
      {
            path: '/account',
            component: Account,
            children: [
                {
                    path: 'registration-info',
                    component: BasicInfo
                },
                {
                    path: 'password-reset',
                    component: AccountPasswordReset
                },
                {
                    path: 'website-link',
                    component: ProfileLink
                }
            ]
      },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/", '/login', '/register', '/password-reset'];
    const publicPrefixes = ["/tutor" ];
    const authRequired = !publicPages.includes(to.path) && !publicPrefixes.some(prefix => to.path.startsWith(prefix));
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})
