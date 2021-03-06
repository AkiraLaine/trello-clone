import Vue from 'vue'

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
    },
    updateBoard (state, data) {
      const index = state.boards.findIndex(b => b.uid === data.uid)
      state.boards.splice(index, 1, data)
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
    },
    fetchUserBoards ({ commit, rootState }) {
      const userId = rootState.user.data.email ? rootState.user.data.id : rootState.user.data.userId

      Vue.$http.get(`/api/boards?filter[where][userId]=${userId}`)
        .then(res => {
          commit('setBoards', res.data)
        })
    }
  }
}
