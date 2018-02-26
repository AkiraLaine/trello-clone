<template>
  <div id="app">
    <template v-if="!isAuthenticated">
      <component :is="loggedOutView" />
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import Landing from '@/components/Landing';
import Signup from '@/components/Signup';
import Login from '@/components/Login'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'trello-clone',
  components: {
    Landing,
    Signup,
    Login
  },
  created () {
    const pathname = window.location.pathname

    if (!this.isAuthenticated && pathname !== '/') {
      this.setLoggedOutView(pathname.substr(1, pathname.length))
      window.history.pushState('', '', `${pathname}`)
    }
  },
  methods: {
    ...mapMutations({
      setLoggedOutView: 'platform/setLoggedOutView'
    })
  },
  computed: {
    ...mapState({
      loggedOutView: state => state.platform.loggedOutView
    }),
    isAuthenticated () {
      return JSON.parse(window.localStorage.getItem('isAuth')) 
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
