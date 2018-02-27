<template>
  <div :class="$style.component">
    <div :class="$style.card">
      <h1>Create a Trello Clone Account</h1>
      <span :class="$style.login">
        or
        <router-link
          to="login"
          :class="$style.link">
          sign in to your account
        </router-link>
      </span>

      <div :class="$style['input-control']">
        <label for="name">Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          placeholder="e.g., Hearmione Granger" />
      </div>

      <div :class="$style['input-control']">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="e.g., hermione@spew.org.uk" />
      </div>

       <div :class="$style['input-control']">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="e.g., ●●●●●●●●" />
      </div>

      <a 
        :class="$style.button"
        @click="signup()">
        Create New Account
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'signup',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations({
      setUserData: 'user/setUserData'
    }),
    signup () {
      const payload = {
        username: this.name.trim(),
        email: this.email,
        password: this.password
      }

      axios.post('/api/Users', payload)
        .then(res => {
          this.setUserData(res.data)
          this.$router.push('')
        })
    }
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

.card .login {
  font-size: 18px;
  font-weight: 400;
}

.card .login .link {
  text-decoration: underline;
  color: #298fca;
  cursor: pointer;
}

.card .login .link:hover {
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
