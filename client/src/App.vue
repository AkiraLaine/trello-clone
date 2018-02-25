<template>
  <div id="app">
    <navbar v-if="showNavbar" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'trello-clone',
  components: {
    Navbar
  },
  computed: {
    showNavbar () {
      if (this.$route.path !== '/login') {
        return true
      }

      return false
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
