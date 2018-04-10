import Vue from 'vue'
import Vuex from 'vuex'

const isProduction = process.env.NODE_ENV === 'production'

Vue.use(Vuex)

export const SHOW_MOBILE_MENU = 'SHOW_MOBILE_MENU'

export const state = {
  showMenuMobile: false
}

// actions
export const actions = {
  toggleMenu ({commit}) {
    commit(SHOW_MOBILE_MENU)
  }
}

export const mutations = {
  [SHOW_MOBILE_MENU] (state) {
    state.showMenuMobile = !state.showMenuMobile
  }
}

export const getters = {
  showMenuMobile: state => state.showMenuMobile
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
  },
  strict: !isProduction
})
