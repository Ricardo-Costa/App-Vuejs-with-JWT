<template>
    <div>
        ok home, test vuex => {{ phrase }}, click to
        <a href="#" @click.prevent="changePhrase">test mutations</a>, or ::
        <a href="#" @click.prevent="removePhrase">remove phrase</a>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                init: 'ok'
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
        }
    }
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
