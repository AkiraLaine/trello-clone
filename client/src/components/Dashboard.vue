<template>
  <div>
    <navbar />
    <board-container />
  </div>
</template>

<script>
import Navbar from '@/components/globals/Navbar'
import BoardContainer from '@/components/Dashboard/BoardContainer'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    BoardContainer
  }
}
</script>

<style>

</style>
