<template>
  <div :class="$style.component">
    <div
      @click="closeModal()" 
      :class="$style.close">
      x
    </div>
    <input
      :class="$style.input"
      type="text"
      placeholder="Add board title">
      <button :class="$style.button">Create Board</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'new-board',
  methods: {
    ...mapActions({
      'closeModal': 'platform/closeModal'
    })
  }
}
</script>

<style module>
.component {
  width: 300px;
  height: 95px;
  background-color: rgb(0, 121, 191);
  padding: 10px;
  margin: 3em auto 0 auto;
  position: relative;
}

.input {
  color: #fff;
  background: none;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  padding: 5px 8px;
}

.input::placeholder {
  color: #fff;
  font-weight: 700;
  opacity: 0.5;
}

.input:hover {
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
}

.close {
  position: absolute;
  top: 5px;
  right: 10px;
  color: #fff;
  user-select: none;
  cursor: pointer;
}

.button {
  padding: 8px 16px;
  font-weight: 700;
  outline: none;
  border: none;
  background-color: #5aac44;
  color: #fff;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: -3em;
}

.button:hover {
  background: #519839 100%;
}
</style>
