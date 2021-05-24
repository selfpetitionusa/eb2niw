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
        return userService.uploadImage(image, sex).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('uploadImageSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Image Saved', { root: true });
                })
            },
            error => {
                commit('uploadImageFailure');
                dispatch('alert/error', error, { root: true });
            }
        );
    },
    updateNameInfo({ dispatch, commit }, {firstName, lastName, email, shortBio}) {
        commit('updateNameInfoRequest');
        return userService.updateNameInfo(firstName, lastName, email, shortBio).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateNameInfoSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Name information Saved', { root: true });
                })
            },
            () => {
                commit('updateNameInfoFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateLinksInfo({ dispatch, commit }, {instagram, youtube, linkedin, facebook}) {
        commit('updateLinksInfoRequest');
        return userService.updateLinksInfo(instagram, youtube, linkedin, facebook).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateLinksInfoSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Links information Saved', { root: true });
                })
            },
            () => {
                commit('updateLinksInfoFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateEducationInfo({ dispatch, commit }, educationInfo) {
        commit('updateEducationInfoRequest');
        return userService.updateEducationInfo(educationInfo).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateEducationInfoSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Education information Saved', { root: true });
                })
            },
            () => {
                commit('updateEducationInfoFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateBio({ dispatch, commit }, bio) {
        commit('updateBioRequest');
        return userService.updateBio(bio).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateBioSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Bio Saved', { root: true });
                })
            },
            () => {
                commit('updateBioFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
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
        state.profile = profile;
    },
    uploadImageRequest(state) {
        state.status = { uploadingImage: true };
    },
    uploadImageSuccess(state) {
        state.status = { uploadedImage: true };
    },
    updateNameInfoRequest(state) {
        state.status = { updatingNameInfo: true };
    },
    uploadImageFailure(state) {
        state.status = {};
    },
    updateNameInfoSuccess(state) {
        state.status = { updatedNameFormInfo: true };
    },
    updateNameInfoFailure(state) {
        state.status = {};
    },
    updateLinksInfoRequest(state) {
        state.status = { updatingLinksInfo: true };
    },
    updateLinksInfoSuccess(state) {
        state.status = { updatedLinksFormInfo: true };
    },
    updateLinksInfoFailure(state) {
        state.status = {};
    },
    updateEducationInfoRequest(state) {
        state.status = { updatingEducationInfo: true };
    },
    updateEducationInfoSuccess(state) {
        state.status = { updatedEducationFormInfo: true };
    },
    updateEducationInfoFailure(state) {
        state.status = {};
    },
    updateBioRequest(state) {
        state.status = { updatingBio: true };
    },
    updateBioSuccess(state) {
        state.status = { updatedBio: true };
    },
    updateBioFailure(state) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};
