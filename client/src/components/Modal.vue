<template>
  <div
    v-if="activeModal" 
    :class="$style.component">
    <component :is="activeModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NewBoard from '@/components/Modal/NewBoard'

export default {
  name: 'modal',
  components: {
    NewBoard
  },
  computed: {
    ...mapState({
      activeModal: state => state.platform.activeModal
    })
  }
}
</script>

<style module>
.component {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
}
</style>
