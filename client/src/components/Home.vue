<template>
  <component :is="componentToRender" />
</template>

<script>
import Login from '@/components/Login'
import Landing from '@/components/Landing'

export default {
  name: 'home',
  components: {
    Landing,
    Login
  },
  computed: {
    componentToRender () {
      if (!JSON.parse(window.localStorage.getItem('isAuth'))) {
        return 'Landing'
      }

      return 'Login'
    }
  }
}
</script>

<style>

</style>
