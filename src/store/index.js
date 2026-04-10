import Vue from 'vue'
import Vuex from 'vuex'
import text from './modules/text'
import navbar from './modules/navbar'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    text,
    navbar
  }
})
