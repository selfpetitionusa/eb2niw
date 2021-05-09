import { userService } from '../services/userservice';
import { router } from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? { status: { loggedIn: true }, user, profile: null }
    : { status: {}, user: null, profile: null};

const actions = {
    login({ dispatch, commit }, { email, password }) {
        commit('loginRequest', { email });

        userService.login(email, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/dashboard');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    },

    getProfile({ dispatch, commit }, {userId, token}) {
        userService.getProfile(userId, token)
            .then(
                profile => commit('getProfileSuccess', profile),
                () => dispatch('alert/error', 'Failed to fetch tutor profile', { root: true })
            );
    },
    uploadImage({ dispatch, commit }, {image, sex}) {
        commit('uploadImageRequest');
        console.log(sex);
        console.log(image);
        return userService.uploadImage(image, sex).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('uploadImageSuccess');
                setTimeout(() => {
                    // display success message after route change completes
                    dispatch('alert/success', 'Image Saved', { root: true });
                })
            },
            error => {
                commit('uploadImageFailure');
                dispatch('alert/error', error, { root: true });
            }
        );
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    router.push('/login');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', { root: true });
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state) {
        state.status = { registering: true };
    },
    registerSuccess(state) {
        state.status = {};
    },
    registerFailure(state) {
        state.status = {};
    },
    getProfileSuccess(state, profile) {
        console.log('elo')
        state.profile = profile;
    },
    uploadImageRequest(state) {
        state.status = { uploadingImage: true };
    },
    uploadImageSuccess(state) {
        state.status = { uploadedImage: true };
    },
    uploadImageFailure(state) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};
