export default {
  namespaced: true,
  state: {
    activeModal: '',
    boards: []
  },
  mutations: {
    setActiveModal (state, data) {
      state.activeModal = data
    },
    addBoard (state, data) {
      state.boards.push(data)
    },
    setBoards (state, data) {
      state.boards = data
    }
  },
  actions: {
    openModal ({ commit }, data) {
      commit('setActiveModal', data)
    },
    closeModal ({ commit }) {
      commit('setActiveModal', '')
    },
    createBoard ({ commit }, data) {
      commit('addBoard', data)
    },
    initBoards ({ commit }, data) {
      commit('setBoards', data)
    }
  }
}
