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
        context.$http.post(LOGIN_URL, loginData).then(response => {

            localStorage.setItem('id_token', response.id_token)
            localStorage.setItem('access_token', response.access_token)

            this.user.authenticated = true
            // redirecionar após sucesso do login
            router.push('/home')

        }, response => {
            console.log('Erro na autenticação do usuário...')
        });
    },

    // To log out, we just need to remove the token
    logout() {
        localStorage.removeItem('id_token')
        localStorage.removeItem('access_token')
        this.user.authenticated = false
        router.push('/login')
    },

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        this.user.authenticated = !!jwt
    },

    // The object to be passed as a header for authenticated requests
    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
    }
}
