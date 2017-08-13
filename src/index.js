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
