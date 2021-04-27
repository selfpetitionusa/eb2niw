import Vue from 'vue';
import Vuex from 'vuex';

import { account } from './account-module';
import { alert } from './alert-module';
import { popup } from './popup-module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        popup
    }
});


