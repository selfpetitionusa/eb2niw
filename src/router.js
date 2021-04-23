import VueRouter from 'vue-router';
// Pages
import Home from './views/Home';
import Profile from './views/Profile';
import PhotoPop from './components/popups/PhotoPop';
import NamePop from './components/popups/NamePop';
import LinksPop from './components/popups/LinksPop';
import EducationPop from './components/popups/EducationPop';
import BioPop from './components/popups/BioPop';
import SubjectsPop from './components/popups/SubjectsPop';
import RatesPop from './components/popups/RatesPop';
import TermsPop from './components/popups/TermsPop';
import YouTubePop from './components/popups/YouTubePop';
import ProblemCardsPop from './components/popups/ProblemCardsPop';

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
