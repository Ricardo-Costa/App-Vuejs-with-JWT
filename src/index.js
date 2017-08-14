import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import auth from './auth'
import store from './store/store'

// estrutura principal
import AppComponent from './components/App.vue'
// pages
import HomePage from './components/pages/Home.vue'
import LoginPage from './components/pages/Login.vue'

// Check the users auth status when the app starts
auth.checkAuth()

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

// TODO if (checkAuth) { }
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// Vue.http.interceptors.push((request, next) => {
//
//     request.headers['Authorization'] = auth.getAuthHeader()
//     request.headers['Accept'] = 'application/vnd.mob.v1+json'
//     request.emulateJSON = true;
//     next()
//
// }//, (response, next) => {
// //     if( response.headers('Auth-Token') ) {
// //       auth.actions.setToken( response.headers('Auth-Token') );
// //     }
// //
// //     if( response.status == 500 ) {
// //       if( response.data.message == 'Token has expired, but is still valid.' ) {
// //         console.log('RETRY', response);
// //       } else {
// //         alert('Whoops, an unknown error occured.');
// //       }
// //     }
// //     next()
// // }
// )

Vue.component('app-component', AppComponent)
Vue.component('login-component', LoginPage)

// rotas
var routes = [
    { path: '/', component: HomePage, meta: { auth: false }},
    { path: '/login', component: LoginPage, meta: { auth: false }},
    { path: '/home', component: HomePage },
    { path: '/*', component: HomePage, redirect: '/home' }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: "#app",
    template: '<app-component/>',
    router,
    store
})
