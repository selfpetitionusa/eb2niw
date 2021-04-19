import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';
import Profile from './views/Profile';
import PhotoPop from './views/popups/PhotoPop';
import NamePop from './views/popups/NamePop';
import LinksPop from './views/popups/LinksPop';
import EducationPop from './views/popups/EducationPop';
import BioPop from './views/popups/BioPop';
import SubjectsPop from './views/popups/SubjectsPop';
import RatesPop from './views/popups/RatesPop';
import TermsPop from './views/popups/TermsPop';
import YouTubePop from './views/popups/YouTubePop';
import ProblemCardsPop from './views/popups/ProblemCardsPop';

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: Home },
      { path: '/tutor/:token', component: Profile },
      { path: '/photopop', component: PhotoPop },
      { path: '/namepop', component: NamePop },
      { path: '/linkspop', component: LinksPop },
      { path: '/educationpop', component: EducationPop },
      { path: '/biopop', component: BioPop },
      { path: '/subjectspop', component: SubjectsPop },
      { path: '/ratespop', component: RatesPop },
      { path: '/termspop', component: TermsPop },
      { path: '/youtubepop', component: YouTubePop },
      { path: '/problemcardspop', component: ProblemCardsPop }
    ]
});
