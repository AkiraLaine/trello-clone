<template>
  <div
    v-if="board"
    :class="$style.component"
    :style="{ 'background-color': board.backgroundColor }">
    <navbar />
    <div :class="$style.container">
      <div :class="$style.name">{{ board.name }}</div>
      <list-container />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/globals/Navbar'
import ListContainer from '@/components/Board/ListContainer'
import { mapState } from 'vuex'

export default {
  name: 'board',
  components: {
    Navbar,
    ListContainer
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

.container {
  padding: 15px;
  box-sizing: border-box;
}

.name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
</style>
