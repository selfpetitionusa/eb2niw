import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // state is the same as what would typically go inside of the data object when using Vue without Vuex.
    state: {
        seen: false
    },
    mutations: {
        setSeen(state) {
           state.seen = true;
        }
    }
});