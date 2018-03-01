<template>
  <div :class="$style.component">
    <router-link
      to="/"
      :class="$style.title">
      Trello Clone
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style module>
.component {
  width: 100%;
  padding: 5px 8px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #026aa7;
  color: white;
  height: 40px;
}

.title {
  cursor: pointer;
  opacity: 0.5;
  text-decoration: none;
  color: #fff;
}

.title:hover {
  opacity: 1;
}
</style>
