<template>
  <div :class="$style.component">
    <div :class="$style.header">To Do</div>
    <div :class="$style.add">Add a card...</div>
  </div>
</template>

<script>
export default {
  name: 'list'
}
</script>

<style module>
.component {
  background: #e2e4e6;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  width: 270px;
}

.header {
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  box-sizing: border-box;
  height: 35px;
}

.add {
  color: #838c91;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 10px;
}

.add:hover {
  background-color: #cdd2d4;
  color: #4d4d4d;
  text-decoration: underline;
}
</style>
