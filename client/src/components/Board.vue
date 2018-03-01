<template>
  <div
    :class="$style.component"
    :style="{ 'background-color': board.backgroundColor }">
    <navbar />
  </div>
</template>

<script>
import Navbar from '@/components/globals/Navbar'
import { mapState } from 'vuex'

export default {
  name: 'board',
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      boards: state => state.platform.boards
    }),
    board () {
      return this.boards.find(b => b.uid === this.$route.params.boardId)
    }
  }
}
</script>

<style module>
.component {
  width: 100%;
  height: 100vh;
}
</style>
