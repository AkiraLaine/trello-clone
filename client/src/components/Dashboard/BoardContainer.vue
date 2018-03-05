<template>
  <div :class="$style.component">
    <div :class="$style.header">Personal Boards</div>
    <div :class="$style['board-container']">
      <board-item
        v-for="board in boards"
        :key="board.id"
        :board="board" />
      <div
        @click="createNewBoard()" 
        :class="[$style.board, $style.newBoard]">
        Create new board...
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BoardItem from '@/components/Dashboard/BoardItem'

export default {
  name: 'board-container',
  components: {
    BoardItem
  },
  computed: {
    ...mapState({
      boards: state => state.platform.boards
    })
  },
  methods: {
    ...mapActions({
      openModal: 'platform/openModal'
    }),
    createNewBoard () {
      this.openModal('NewBoard')
    }
  }
}
</script>

<style module>
.component {
  width: 100%;
  margin: 0 auto;
  max-width: 1250px;
  padding: 20px 16px 0;
}

.header {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
}

.board-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.board {
  width: 24%;
  height: 95px;
  box-sizing: border-box;
  padding: 0 8px 8px 0;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
}

.newBoard {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3e3e3;
  color: #838c91;
  font-weight: 500;
  font-size: 14px;
}

.newBoard:hover {
  background-color: #d6dadc;
  color: #4d4d4d;
}
</style>
