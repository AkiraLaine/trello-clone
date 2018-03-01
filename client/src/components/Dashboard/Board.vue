<template>
  <div 
    :class="$style.component"
    :style="{
      'background-color': board.backgroundColor
    }">
    {{ board.name }}
  </div>
</template>

<script>
export default {
  name: 'board',
  props: {
    board: {
      type: Object,
      required: true
    }
  }
}
</script>

<style module>
.component {
  width: 25%;
  height: 95px;
  box-sizing: border-box;
  padding: 0 8px 8px 0;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 15px;
}
</style>
