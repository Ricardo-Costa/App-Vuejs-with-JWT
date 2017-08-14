<template>
    <div>
        ok home, test vuex => {{ phrase }}, click to
        <a href="#" @click.prevent="changePhrase">test mutations</a>, or ::
        <a href="#" @click.prevent="removePhrase">remove phrase</a>;

        <ul>
            <li v-for="user in users">
                {{ user }}
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                init: 'ok',
                users: [
                    'Ricardo Costa'
                ]
            }
        },

        methods: {
            changePhrase() {
                this.$store.dispatch('setPhrase', 'Event called with success...')
            },
            removePhrase() {
                this.$store.dispatch('removePhrase')
            }
        },

        computed: {
            phrase() {
                return this.$store.getters.myPhrase
            }
        },

        mounted: function () {
            this.$http.get('http://localhost:3001/test').then(response => {

                this.users = response.body

            }, response => {
                console.log('Erro ao listar usuários...')
            });
        }
    }
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
