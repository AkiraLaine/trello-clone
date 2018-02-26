export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setUserData (state, data) {
      state.data = data
      window.localStorage.setItem('isAuth', true)
    } 
  }
}
