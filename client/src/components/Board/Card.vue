<template>
  <div :class="$style.component">
    {{ card.text }}
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style module>
.component {
  background-color:#fff;
  padding: 6px 6px 6px 8px;
  color: #4d4d4d;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 7px;
  position: relative;
}

.component:hover {
  background-color: #edeff0;
}

.component:last-child {
  margin-bottom: 2px;
}
</style>
