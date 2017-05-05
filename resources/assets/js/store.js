import Vue from 'vue';
import Vuex from 'vuex';

import VueLocalStorage from 'vue-ls';

//options for localStorage
let options = {
  namespace: 'vuejs__'
};
Vue.use(new VueLocalStorage, options);

// Vue.use(VueResource);
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loggedin: false,
        loggedin_user: {},
        all_user: [],
        user_tables: []
    },
    getters: {
        getloggedInStatus (state) {
            return state.loggedin;
        },
        getloggedInUser (state) {
            return state.loggedin_user;
        },
        getAllUsers (state) {
            return state.all_user;
        }
    },
    actions: {
        setloggedInStatus ( {commit}, val) {
            commit ('setloggedInStatus', val);
        },
        setAllUsers ( {commit}, val) {
            commit ('setAllUsers', val);
        },
        setUserTables ( {commit}, val) {
            commit ('setUserTables', val);
        }
    },
    mutations: {
        setloggedInStatus (state, val) {
            if (val.loggedin == 1) {
                state.loggedin = val.loggedin;
                state.loggedin_user = JSON.parse(val.loggedin_user);
            } else {
                state.loggedin = false;
                state.loggedin_user = {};
            }
            // save user information in a localStorage
            Vue.ls.set('user', state.loggedin_user);
        },
        setAllUsers (state, val) {
           state.all_user = val;
        },
        setUserTables (state, val) {
           state.user_tables = val;
        }
    }
});
