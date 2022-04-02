import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';
import ProfileView from './views/ProfileView';
import EditProfileView from './views/EditProfileView';
import Preview from './views/Preview';
import Help from './views/Help';
import Colors from './views/Colors';
import Account from './views/Account';
import Login from './views/Login';
import Register from './views/Register';
import RegisterConfirmation from './views/RegisterConfirmation';
import PasswordReset from './views/PasswordReset';
import NeedsAssessment from './views/NeedsAssessment';
import BasicInfo from './views/account/BasicInfo';
import AccountPasswordReset from './views/account/AccountPasswordReset';
import ProfileLink from './views/account/ProfileLink';
import AdminDashboardView from "./views/AdminDashboardView";

import HomePolls from "./views/ideas/polls/HomePolls";
import HomeGreenCard from "./views/ideas/green-card/HomeGreenCard";
import HomeAnnotate from "./views/ideas/annotate/HomeAnnotate";
import HomeSensitivity from "./views/ideas/sensitivity/HomeSensitivity";
import HomeSanctions from "./views/ideas/sanctions/HomeSanctions";

import GreenCardEvaluation from "./views/ideas/green-card/GreenCardEvaluation";
import GreenCardApplication from "./views/ideas/green-card/GreenCardApplication";
import PollsApplication from "./views/ideas/polls/PollsApplication";
import AnnotateApplication from "./views/ideas/annotate/AnnotateApplication";
import SanctionsApplication from "./views/ideas/sanctions/SanctionsApplication";


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
      { path: '/register-confirmation', name: 'register-confirmation', component: RegisterConfirmation, props: true },
      { path: '/password-reset', component: PasswordReset },
      { path: '/website-needs-assessment', component: NeedsAssessment },
      { path: '/dashboard', component: EditProfileView },
      { path: '/preview', component: Preview },
      { path: '/help', component: Help },
      { path: '/colors', component: Colors },
      { path: '/admin', component: AdminDashboardView },
      { path: '/polls', component: HomePolls },
      { path: '/greencard', component: HomeGreenCard },
      { path: '/annotate', component: HomeAnnotate },
      { path: '/sensitivity', component: HomeSensitivity },
      { path: '/sanctions', component: HomeSanctions },
      { path: '/green-card-evaluation', component: GreenCardEvaluation },
      { path: '/green-card-application', component: GreenCardApplication },
      { path: '/polls-application', component: PollsApplication },
      { path: '/annotate-application', component: AnnotateApplication },
      { path: '/sanctions-application', component: SanctionsApplication },
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
    const publicPages = ["/", '/login', '/register', '/password-reset', '/website-needs-assessment', '/polls', '/greencard', '/annotate', '/sensitivity', 'green-card-evaluation', 'green-card-application', 'polls-application', 'annotate-application', 'sanctions-application' ];
    const publicPrefixes = ["/tutor" ];
    const authRequired = !publicPages.includes(to.path) && !publicPrefixes.some(prefix => to.path.startsWith(prefix));
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})
