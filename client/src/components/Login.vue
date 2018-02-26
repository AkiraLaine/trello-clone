<template>
  <div :class="$style.component">
    <div :class="$style.card">
      <h1>Log in to Trello Clone</h1>
      <span :class="$style.signup">
        or 
        <a
          @click="setLoggedOutView('Signup')"
          :class="$style.link">
          create an account  
        </a>
      </span>

      <div :class="$style['input-control']">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="e.g., dana.scully@fbi.gov" />
      </div>

       <div :class="$style['input-control']">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="e.g., ●●●●●●●●" />
      </div>

      <a :class="$style.button">Log in</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'login',
  created () {
    window.history.pushState('', '', '/login')
  },
  methods: {
    ...mapMutations({
      setLoggedOutView: 'platform/setLoggedOutView'
    })
  }
}
</script>

<style module>
.component {
  width: 100%;
  min-height: 100vh;
  padding: 4em 1em;
  display: flex;
  justify-content: center;
  align-content: center;
}

.card {
  text-align: left;
  width: 450px;
}

.card h1 {
  font-size: 38px;
  color: #333;
  margin-bottom: 10px;
}

.card .signup {
  font-size: 18px;
  font-weight: 400;
}

.card .signup .link {
  text-decoration: underline;
  color: #298fca;
  cursor: pointer;
}

.card .signup .link:hover {
  color: #0c3953;
}

.input-control {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.input-control label {
  font-weight: 300;
  font-size: 1.6em;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.input-control input {
  border: 1px solid #cdd2d4;
  outline: none;
  width: 100%;
  padding: 12px;
  font-size: 1.3em;
  border-radius: 5px;
  background: #edeff0;
  font-weight: 300;
}

.button {
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: .7em 1.3em;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 2px 0 rgba(0,0,0,0.3);
  display: inline-block;
  background: #61bd4f;
  font-weight: 600;
  font-size: 20px;
}

.button:hover {
  background: linear-gradient(to bottom, #5aac44 0, #519839 100%)
}
</style>
