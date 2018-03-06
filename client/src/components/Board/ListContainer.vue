<template>
  <div :class="$style.component">
    <draggable 
      :list="lists"
      :options="{
        ghostClass: $style.ghost,
        handle: '.handle'
      }"
      :class="$style.container">
      <list 
        v-for="list in lists"
        :key="list.id"
        :list="list" />
    </draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import List from '@/components/Board/List'

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
  opacity: 0;
}
</style>
