export default {

    setNewPhrase(state, phrase) {
        state.myPhrase = phrase
    },

    removePhrase(state) {
        state.myPhrase = ''
    }

}
