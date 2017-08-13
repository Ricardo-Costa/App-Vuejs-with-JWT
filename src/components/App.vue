<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/foo">Foo</router-link>
                    </li>
                    <li>
                        <router-link to="/bar">Bar</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav pull-right">
                    <li>
                        <router-link to="/login" v-if="!user.authenticated">Login</router-link>
                    </li>
                    <li>
                        <a @click="logout()" v-if="user.authenticated">Logout</a>
                    </li>
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
        data: function() {
            return {
                user: auth.user
            }
        },
        methods: {
            logout: function() {
                auth.logout()
            }
        }
    }
</script>
