<template>
  <div :class="$style.component">
    <div :class="$style.title">Trello Clone</div>

    <div :class="$style['auth-buttons']">
      <router-link 
        to="login"
        :class="$style.button">
        Log in
      </router-link>
      <router-link
        to="signup"
        :class="[$style.button, $style.primary]">
        Sign Up
      </router-link>
    </div>
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
  height: 80px;
  background-color: #0079bf;
  display: flex;
  align-items: center;
  padding: 1em .75em;
  box-sizing: border-box;
}

.title {
  font-weight: 600;
  color: #fff;
  font-size: 1.7em;
}

.auth-buttons {
  margin-left: auto;
}

.button {
  text-decoration: none;
  padding: .7em 1.3em;
  color: #fff;
  background: #0466a3;
  font-weight: 400;
  border-radius: .4em;
  cursor: pointer;
  box-shadow: 0 2px 0 rgba(0,0,0,0.3);
  display: inline-block;
}

.button.primary {
  background: linear-gradient(to bottom, #61bd4f 0, #5aac44 100%);
  font-weight: 600;
}

.button:hover {
  background-color: rgba(0,0,0,0.25);
  box-shadow: 0 2px 0 rgba(0,0,0,0.4)
}

.button.primary:hover {
  background: linear-gradient(to bottom, #5aac44 0, #519839 100%)
}
</style>
