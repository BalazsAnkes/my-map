import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)

export default (options = {}) => {
  return new Vuex.Store({
    state: options.state || state,
    mutations: {
    },
    actions: {
    }
  })
}
