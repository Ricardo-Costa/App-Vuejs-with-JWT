export default {

    setPhrase(context, phrase) {
        context.commit('setNewPhrase', phrase)
    },

    removePhrase({ commit }) {
        commit('removePhrase')
    }

}
