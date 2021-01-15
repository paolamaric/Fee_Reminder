import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from './firebase'
import router from './router/index'

Vue.use(Vuex);
export default new Vuex.Store({ 
    state: {
        userProfile:{}
        },
    searchTerm: '',
    currentUser: null,
    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val;
            }
        },
    actions: {
        async login({dispatch}, form) {
            const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password);
            dispatch('fetchUserProfile', user);
            },
        async signup({ dispatch }, form) {
            const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);
            await fb.usersCollection.doc(user.uid).set({
                name: form.name,
                isHost: form.isHost
                }).then(async function() {
                    await dispatch('fetchUserProfile', user);
                    })
            },
        async fetchUserProfile({ commit }, user) {
            const userProfile = fb.usersCollection.doc(user.uid).get();
            commit('setUserProfile', userProfile.data);
            if (router.currentRoute.path === '/login' || router.currentRoute.path === '/registration') {
                window.location = '/';
                // router.push('/');
                }
            }
        }
    });