import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import auth from './auth'

import AppComponent from './components/App.vue'
import HomeComponent from './components/Home.vue'
import LoginComponent from './components/Login.vue'

// Check the users auth status when the app starts
auth.checkAuth()

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('app-component', AppComponent)
Vue.component('home-component', HomeComponent)
Vue.component('login-component', LoginComponent)

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

// components
const Home = { template: '<div><home-component name="Oi" initialEnthusiasm="1"></home-component></div>' }
const Login = { template: '<login-component/>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// rotas
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, meta: { auth: false } },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/*', component: Home, redirect: '/home' }
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