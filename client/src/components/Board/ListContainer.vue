<template>
  <div :class="$style.component">
    <list />
  </div>
</template>

<script>
import List from '@/components/Board/List'

export default {
  name: 'list-container',
  components: {
    List
  }
}
</script>

<style module>
.component {
  margin-top: 10px;
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
