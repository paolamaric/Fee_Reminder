import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from './firebase'
import router from './router/index'

Vue.use(Vuex);
export default new Vuex.Store({ 
    state: {
        userProfile: {},
        invoices: {}
        },
    // searchTerm: '',
    // currentUser: null,
    mutations: {
        setUserProfile(state, val) {
            state.userProfile = val;
            },
        setInvoices(state, val) {
            state.invoices = val;
            }
        },
    actions: {
        async login({dispatch}, form) {
            const { user } = fb.auth.signInWithEmailAndPassword(form.email, form.password);
            console.log("u funkciji" + user);
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
            console.log("U fetch profile" + user.uid)
            const userProfile = await fb.usersCollection.doc(user.uid).get();
            commit('setUserProfile', userProfile.data());
            if (router.currentRoute.path === '/login' || router.currentRoute.path === '/registration') {
                window.location = '/home';
                // router.push('/HomeClient');
            }
        },
        async fetchInvoice({commit}) {
            let paidInvoices = [];
            let unpaidInvoices = [];
            let allInvoices = [];
            console.log("U fetch Invoices")
            await fb.invoiceCollection.get().then((results) => {
                results.forEach((doc) => {
                    let data = doc.data();
                    let invoice = {
                        id: doc.id,
                        DueDate: data.DueDate,
                        ClientName: data.ClientName,
                        BillName: data.BillName,
                        BillAmount: data.BillAmount,
                        Category: data.Category,    
                        isPaid: data.isPaid                
                        }
                    if (data.isPaid) {
                        paidInvoices.push(invoice);
                        allInvoices.push(invoice);
                        }
                    else {
                        unpaidInvoices.push(invoice);
                        allInvoices.push(invoice);
                        }
                    }) 
                })
                // console.log("Napisi currentRoute " + router.currentRoute.path);
                if (router.currentRoute.path === '/HistoryPaid') {
                    commit('setInvoices', paidInvoices);
                    // window.location = '/HistoryPaid';
                    }
                else if (router.currentRoute.path === '/list') {
                    commit('setInvoices', unpaidInvoices); 
                    // window.location = '/list';
                    }
                else {
                    // console.log("U else if sa currentRoute za ReportHost i Reports");
                    await commit('setInvoices', allInvoices);
                    }
                },
        async logout ({ commit }) {
            await fb.auth.signOut();
            commit('setUserProfile',{});
            window.location = '/login';
            },
        async invoice({ dispatch }, form) {
            console.log(form.isPaid);
            console.log(typeof(form.isPaid));
            if (form.isPaid) {
                await fb.invoiceCollection.add({
                    DueDate: form.DueDate,
                    ClientName: form.ClientName,
                    BillName: form.BillName,
                    BillAmount: form.BillAmount,
                    Category: form.Category,
                    isPaid: form.isPaid
                    }).then(async function() {
                        await dispatch('fetchInvoice');
                        window.location = '/HistoryPaid';
                        }) 
                }
            else {
                await fb.invoiceCollection.add({
                    ClientName: form.ClientName,
                    BillName: form.BillName,
                    BillAmount: form.BillAmount,
                    Category: form.Category,
                    isPaid: form.isPaid
                    }).then(async function() {
                        await dispatch('fetchInvoice');
                        window.location = '/list';
                        })
                }
            }
        }
        })
    