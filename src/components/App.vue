<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <ul class="nav navbar-nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/login" v-if="!user.authenticated">Login</router-link>
                    <router-link to="/login" @click="logout()" v-if="user.authenticated">Logout</router-link>
                    <router-link to="/foo">Foo</router-link>
                    <router-link to="/bar">Bar</router-link>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import auth from '../auth'

    export default {
        data() {
            return {
                user: auth.user
            }
        },
        methods: {
            logout() {
                auth.logout()
            }
        }
    }
</script>