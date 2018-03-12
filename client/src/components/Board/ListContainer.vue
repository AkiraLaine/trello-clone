<template>
  <div :class="$style.component">
    <draggable
      v-model="localLists"
      :options="{
        ghostClass: $style.ghost,
        handle: '.handle'
      }"
      :class="$style.container">
      <list
        v-for="list in localLists"
        :key="list.id"
        :list="list" />
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import List from '@/components/Board/List'
import { mapState } from 'vuex'

export default {
  name: 'list-container',
  components: {
    Draggable,
    List
  },
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      newLists: this.lists
    }
  },
  computed: {
    ...mapState({
      boards: state => state.platform.boards
    }),
    board () {
      return this.boards.find(b => b.uid === this.$route.params.boardId)
    },
    localLists: {
      get () {
        return this.newLists
      },
      set (data) {
        this.newLists = data

        this.$http.patch(`/api/boards/${this.board.id}`, { lists: this.newLists })
          .then(res => {
            console.log(res)
          })
      }
    }
  }
}
</script>

<style module>
.component {
  margin-top: 15px;
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  align-items: flex-start;
}

.ghost {
  position: relative;
  background: none;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.ghost::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  z-index: 10;
}
</style>
