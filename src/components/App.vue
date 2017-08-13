<template>
    <div>
        <!-- Static navbar -->
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">App Vue.js</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/foo">Foo</router-link>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link class="nav-link" to="/login" v-if="!user.authenticated">Login</router-link>
                        </li>
                        <li>
                            <a class="nav-link" @click="logout(this)" v-if="user.authenticated">Logout</a>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <router-view></router-view>
                </div>
            </div>
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
        },
        mounted: function () {
            document.getElementById("navbar").addEventListener ("click", toggleNav);

            function toggleNav() {
                var nav = document.getElementById("navbar");
                var className = nav.getAttribute("class");
                if(className == "navbar-collapse collapse") {
                    nav.className = "navbar-collapse collapse in";
                } else {
                    nav.className = "navbar-collapse collapse";
                }
            }
        }
    }
</script>
