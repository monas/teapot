/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { store } from './store.js';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import TeapotHomepageComponent from './components/Homepage.vue';
Vue.component('teapot-homepage-component', TeapotHomepageComponent);

import DashboardComponent from './components/Dashboard.vue';
Vue.component('teapot-dashboard', DashboardComponent);

import LoginComponent from './components/Login.vue';
Vue.component('teapot-login', LoginComponent);

import TeapotRegisterComponent from './components/Register.vue';
Vue.component('teapot-register', TeapotRegisterComponent);

import TeapotLoginPage from './components/page/Login.vue';
// Vue.component('teapot-login-page', TeapotLoginPage);

import TeapotLogoutLink from './components/Logout.vue';
Vue.component('teapot-logout-link', TeapotLogoutLink);

import TopNavigationComponent from './components/TopNavigation.vue';
Vue.component('teapot-top-nav', TopNavigationComponent);

import UserComponent from './components/page/UserProfile.vue';
Vue.component('teapot-user-page', UserComponent);

import UserListComponent from './components/UserList.vue';
Vue.component('teapot-user-list', UserListComponent);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// import vSelect from 'vue-select'
// Vue.component('v-select', vSelect);


const routes = [
    {
        path: '/',
        component: TeapotHomepageComponent
    },
    {
        path: '/user',
        component: UserComponent
    },

    {
        path: '/dashboard',
        component: DashboardComponent
    },
    {
        path: '/login',
        component: TeapotLoginPage
    },
        {
        path: '/register',
        component: TeapotRegisterComponent
    }
];

const router = new VueRouter({
    mode: 'history',
    routes // short for routes: routes,
});


const app = new Vue({
    el: "#app",
    router,
    store,

    mounted: function () {
        // let's check if we have a user in a localStorage
        let user = this.$ls.get('user');
        if (user && user.id > 0) {
            this.$store.dispatch('setloggedInStatus', {loggedin: 1, loggedin_user: JSON.stringify(user)} );
        }
    },
});
