<template>
  <component :is="componentToRender" />
</template>

<script>
import Dashboard from '@/components/Dashboard'
import Landing from '@/components/Landing'

export default {
  name: 'home',
  components: {
    Dashboard,
    Landing
  },
  computed: {
    componentToRender () {
      const user = JSON.parse(window.localStorage.getItem('user')) || {}

      if (!Object.keys(user).length) {
        return 'Landing'
      }

      return 'Dashboard'
    }
  }
}
</script>

<style>

</style>
