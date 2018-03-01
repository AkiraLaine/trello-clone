export default {
  namespaced: true,
  state: {
    activeModal: ''
  },
  mutations: {
    setActiveModal (state, data) {
      state.activeModal = data
    }
  },
  actions: {
    openModal ({ commit }, data) {
      commit('setActiveModal', data)
    },
    closeModal ({ commit }) {
      commit('setActiveModal', '')
    }
  }
}
