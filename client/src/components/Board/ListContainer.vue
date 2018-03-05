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
      localLists: this.lists
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
