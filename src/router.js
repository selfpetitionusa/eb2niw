import VueRouter from 'vue-router';
// Pages

import HomeMemes from "./ideas/memes/HomeMemes";
import RegisterMemes from "./ideas/memes/RegisterMemes";
import UploadImageMemes from "./ideas/memes/UploadImageMemes";
import UploadPhotoMemes from "./ideas/memes/UploadPhotoMemes";
import PositionMemes from "./ideas/memes/PositionMemes";
import RemoveBackgroundMemes from "./ideas/memes/RemoveBackgroundMemes";
import AddTextMemes from "./ideas/memes/AddTextMemes";
import DownloadMemes from "./ideas/memes/DownloadMemes";


export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: HomeMemes },
      { path: '/register', component: RegisterMemes },
      { path: '/upload-image', component: UploadImageMemes },
      { path: '/upload-photo', component: UploadPhotoMemes },
      { path: '/position-meme', component: PositionMemes },
      { path: '/remove-background', component: RemoveBackgroundMemes },
      { path: '/add-text', component: AddTextMemes },
      { path: '/download-meme', component: DownloadMemes },
      // otherwise redirect to home
      { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page

    next();
})
