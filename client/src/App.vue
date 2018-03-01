<template>
  <div id="app">
    <modal />
    <router-view></router-view>
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'trello-clone',
  components: {
    Modal
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue";
  box-sizing: border-box;
}
</style>
