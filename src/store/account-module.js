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

    clear({ commit }) {
        commit('clear');
    },
    copyProfileLink({ dispatch }) {
        dispatch('alert/success',  'Copied link', { root: true });
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
    updateSubjectsInfo({ dispatch, commit }, subjectsInfo) {
        commit('updateSubjectsInfoRequest');
        return userService.updateSubjectsInfo(subjectsInfo).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateSubjectsInfoSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Subjects information Saved', { root: true });
                })
            },
            () => {
                commit('updateSubjectsInfoFailure');
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
    updateRates({ dispatch, commit }, data) {
        commit('updateRatesRequest');
        return userService.updateRates(data).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateRatesSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Rates Saved', { root: true });
                })
            },
            () => {
                commit('updateRatesFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateTerms({ dispatch, commit }, data) {
        commit('updateTermsRequest');
        return userService.updateTerms(data).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateTermsSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Terms Saved', { root: true });
                })
            },
            () => {
                commit('updateTermsFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateYoutube({ dispatch, commit }, data) {
        commit('updateYoutubeRequest');
        return userService.updateYoutube(data).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateYoutubeSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Youtube intro link Saved', { root: true });
                })
            },
            () => {
                commit('updateYoutubeFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateProblemCards({ dispatch, commit }, data) {
        commit('updateProblemCardsRequest');
        return userService.updateProblemCards(data).then(
            (profile) => {
                commit('getProfileSuccess', profile);
                commit('updateProblemCardsSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Problem cards saved', { root: true });
                })
            },
            () => {
                commit('updateProblemCardsFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    updateBasicInfo({ dispatch, commit }, data) {
        commit('updateBasicInfoRequest');
        return userService.updateBasicInfo(data).then(
            (user) => {
                commit('updateSuccess', user);
                commit('updateBasicInfoSuccess');
                setTimeout(() => {
                    dispatch('alert/success', 'Basic Info Saved', { root: true });
                })
            },
            () => {
                commit('updateBasicInfoFailure');
                dispatch('alert/error',  'Failed to update data', { root: true });
            }
        );
    },
    requestPasswordReset({ commit }, data) {
        commit('requestPasswordResetRequest');
        return userService.requestPasswordReset(data).then(
            () => {
                commit('requestPasswordResetSuccess');
            },
            () => {
                commit('requestPasswordResetFailure');
            }
        );
    },
    resetPassword({ commit }, {email, code, password}) {
        commit('resetPasswordRequest');
        return userService.resetPassword(email, code, password).then(
            () => {
                commit('resetPasswordRequestSuccess');
            },
            () => {
                commit('requestPasswordResetFailure');
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
    clear() {
        state.status = { };
    },
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    updateSuccess(state, user) {
        console.log(user)
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
    },
    updateSubjectsInfoRequest(state) {
        state.status = { updatingSubjectsForm: true };
    },
    updateSubjectsInfoSuccess(state) {
        state.status = { updatedSubjectsForm: true };
    },
    updateSubjectsInfoFailure(state) {
        state.status = {};
    },
    updateRatesRequest(state) {
        state.status = { updatingRatesForm: true };
    },
    updateRatesSuccess(state) {
        state.status = { updatedRatesForm: true };
    },
    updateRatesFailure(state) {
        state.status = {};
    },
    updateTermsRequest(state) {
        state.status = { updatingTermsForm: true };
    },
    updateTermsSuccess(state) {
        state.status = { updatedTermsForm: true };
    },
    updateTermsFailure(state) {
        state.status = {};
    },
    updateYoutubeRequest(state) {
        state.status = { updatingYoutubeForm: true };
    },
    updateYoutubeSuccess(state) {
        state.status = { updatedYoutubeForm: true };
    },
    updateYoutubeFailure(state) {
        state.status = {};
    },
    updateProblemCardsRequest(state) {
        state.status = { updatingProblemCardsForm: true };
    },
    updateProblemCardsSuccess(state) {
        state.status = { updatedProblemCardsForm: true };
    },
    updateProblemCardsFailure(state) {
        state.status = {};
    },
    requestPasswordResetRequest(state) {
        state.status = { resetingPassword: true };
    },
    requestPasswordResetSuccess(state) {
        state.status = { resetingPasswordMailSent: true };
    },
    requestPasswordResetFailure(state) {
        state.status = {resetingPasswordMailFailure: true };
    },
    resetPasswordRequest(state) {
        state.status = { resetingPassword: true, resetingPasswordMailSent: true };
    },
    resetPasswordRequestSuccess(state) {
        state.status = { resetPasswordSuccess: true };
    },
    updateBasicInfoRequest(state) {
        state.status = {updatingBasicInfo: true };
    },
    updateBasicInfoSuccess(state) {
        state.status = {};
    },
    updateBasicInfoFailure(state) {
        state.status = {};
    }

};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};
