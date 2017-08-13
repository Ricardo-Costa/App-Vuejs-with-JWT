import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        myPhrase: 'The user is logged...'
    },

    getters: {
        myPhrase(state) {
            return state.myPhrase
        }
    },

    mutations: {
        setNewPhrase(state, phrase) {
            state.myPhrase = phrase
        },
        removePhrase(state) {
            state.myPhrase = ''
        }
    },

    actions: {
        setPhrase(context, phrase) {
            context.commit('setNewPhrase', phrase)
        },
        removePhrase({ commit }) {
            commit('removePhrase')
        }
    },

    plugins: [ createPersistedState() ]

})
