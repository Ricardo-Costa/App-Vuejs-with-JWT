import VueRouter from 'vue-router'
var router = new VueRouter()

// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'login'
const SIGNUP_URL = API_URL + 'users'

export default {

    // User object will let us check authentication status
    user: {
        authenticated: false
    },

    // requisitar autenticação e salvar JWT retornado se sucesso
    login(context, loginData) {
        var self = this

        context.$http.post(LOGIN_URL, loginData).then(function (data) {
            // verificacao
            if (data.body.token) {
                localStorage.setItem('token', data.body.token)
                console.log('Nova sessao');
            } else {
                console.log('Error ao salvar sessao');
            }

            self.user.authenticated = true
            // redirecionar após sucesso do login
            router.push('/home')

        });
    },

    // To log out, we just need to remove the token
    logout() {
        localStorage.removeItem('token')
        this.user.authenticated = false
        router.push('/login')
    },

    checkAuth() {
        var jwt = localStorage.getItem('token')
        this.user.authenticated = !!jwt
    },

    // The object to be passed as a header for authenticated requests
    getAuthHeader() {
        return 'Bearer ' + localStorage.getItem('token')
    }
}
