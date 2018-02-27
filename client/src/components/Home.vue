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
      if (!JSON.parse(window.localStorage.getItem('isAuth'))) {
        return 'Landing'
      }

      return 'Dashboard'
    }
  }
}
</script>

<style>

</style>
