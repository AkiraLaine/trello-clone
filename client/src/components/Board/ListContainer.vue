<template>
  <div :class="$style.component">
    <list 
      v-for="list in lists"
      :key="list.id"
      :list="list" />
  </div>
</template>

<script>
import List from '@/components/Board/List'

export default {
  name: 'list-container',
  components: {
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
  display: flex;
  align-items: flex-start;
}
</style>
