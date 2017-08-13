<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="#">
                <b>APP</b> Vue.js
            </a>
        </div>
        <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <form method="post">
                <div class="form-group has-feedback">

                    <input type="email" class="form-control" placeholder="Email" v-model="credentials.email" required />
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>

                </div>
                <div class="form-group has-feedback">

                    <input type="password" class="form-control" placeholder="Password" v-model="credentials.password" required />
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>

                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox"> Remember Me
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary btn-block btn-flat" @click="submit()">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import auth from '../../auth'

    export default {

        data: function () {
            return {
                credentials: {
                    email: 'ricardo@mail.com',
                    password: 'testeteste'
                },
                error: ''
            }
        },

        methods: {
            submit: function () {

                // validação básica de inputs
                if (!this.credentials.email || !this.credentials.password) {
                    alert('Error, fill the inputs...');
                    return false;
                }

                // logar
                auth.login(this, { email: this.credentials.email, password: this.credentials.password })
            }
        }

    }
</script>
