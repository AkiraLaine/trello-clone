<template>
  <router-link
    :to="{ name: 'board', params: { boardId: board.uid, boardName } }"
    tag="div"
    :class="$style.component"
    :style="{
      'background-color': board.backgroundColor
    }">
    <div :class="$style.name">
      {{ board.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'board-item',
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  computed: {
    boardName () {
      return this.board.name
        .replace(/[^a-zA-Z\d\s]/g, '')
        .replace(/\s\s+/g, ' ')
        .replace(/\s/g, '-')
        .toLowerCase()
    }
  }
}
</script>

<style module>
.component {
  width: 24%;
  height: 95px;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
}

.component::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
}

.component:hover::after {
  opacity: 0.1;
}

.name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
</style>
