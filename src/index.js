import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import auth from './auth'

// pages
import AppComponent from './components/App.vue'
import HomePage from './components/Home.vue'
import LoginPage from './components/pages/Login.vue'

// Check the users auth status when the app starts
auth.checkAuth()

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('app-component', AppComponent)
Vue.component('login-component', LoginPage)

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// rotas
const routes = [
    { path: '/', component: LoginPage, meta: { auth: false }},
    { path: '/home', component: LoginPage },
    { path: '/*', component: HomePage, redirect: '/home' }
]

const router = new VueRouter({
    routes
})

Vue.router = router

const app = new Vue({
    el: "#app",
    template: '<app-component/>',
    router
})
