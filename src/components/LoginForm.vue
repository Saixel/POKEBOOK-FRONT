<template>
  <div id="login-form">
    <div>
      <input type="text" name="email" v-model="email" />
    </div>
    <div>
      <input type="password" name="password" v-model="password" />
    </div>
    <div>
      <button class="btn-login" @click="logIn">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    // checkLogin() {
    //   return this.email === 'ash@gmail.com' && this.password === 'pikachu'
    // }
  },
  methods: {
    logIn() {
      if (this.email === "ash@gmail.com" && this.password === "pikachu") {
        // window.alert(`You are in!`)
        this.$router.push('/home');
      } else {
        window.alert(`Email or password incorrect`);
      }
    },
  },
};
</script>

<style>
.btn-login {
  background-color: red;
  margin-top: 10px;
  padding: 5px 40px 5px 40px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border: 2px solid black;
  border-radius: 5px;
}
</style>