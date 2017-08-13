import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        myPhrase: 'The user is logged...'
    },

    getters,
    mutations,
    actions,

    plugins: [ createPersistedState() ]

})
