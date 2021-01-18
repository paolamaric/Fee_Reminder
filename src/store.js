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
            const { user } = fb.auth.signInWithEmailAndPassword(form.email, form.password);
            dispatch('fetchUserProfile', user);
            },
        async signup({ dispatch }, form) {
            const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);
            if (form.isHost) {
                await fb.usersCollection.doc(user.uid).set({
                    name: form.name,
                    adress: form.adress,
                    city: form.city,
                    zip: form.zip,
                    OIB: form.OIB,
                    isHost: form.isHost
                    }).then(async function() {
                        await dispatch('fetchUserProfile', user);
                        }) 
                }
            else {
                await fb.usersCollection.doc(user.uid).set({
                    name: form.name,
                    adress: form.adress,
                    city: form.city,
                    zip: form.zip,
                    isHost: form.isHost
                    }).then(async function() {
                        await dispatch('fetchUserProfile', user);
                        })
                }
            },
            
        async fetchUserProfile({ commit }, user) {
            const userProfile = await fb.usersCollection.doc(user.uid).get();
            commit('setUserProfile', userProfile.data);
            if (router.currentRoute.path === '/login' || router.currentRoute.path === '/registration') {
                window.location = '/HomeClient';
<<<<<<< HEAD
                // router.push('/');
=======
                // router.push('/HomeClient');
>>>>>>> 6662b6ffadb303ef542f1e32e169d8fec6d38a6e
                }
            }
        }
    });