<template>
  <div id="app">
    <modal />
    <router-view></router-view>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'trello-clone',
  components: {
    Modal
  },
  created () {
    const user = JSON.parse(window.localStorage.getItem('user')) || {}
    
    if (Object.keys(user).length) {
      this.setUserData(user)
      this.fetchUserBoards()
    }
  },
  methods: {
    ...mapMutations({
      setUserData: 'user/setUserData'
    }),
    ...mapActions({
      initBoards: 'platform/initBoards',
      fetchUserBoards: 'platform/fetchUserBoards'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    userId () {
      return this.user.email ? this.user.id : this.user.userId
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue";
  box-sizing: border-box;
}
</style>
