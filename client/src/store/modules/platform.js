export default {
  namespaced: true,
  state: {
    loggedOutView: 'Landing'
  },
  mutations: {
    setLoggedOutView (state, data) {
      state.loggedOutView = data
    } 
  }
}
