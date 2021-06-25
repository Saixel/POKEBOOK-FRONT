<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Gotta catch 'em all!</p>
    <h3>Log In</h3>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: "Welcome",
  props: {
    msg: String,
  },
  components: {
    LoginForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-weight: bolder;
}
h3 {
  margin: 20px 0 40px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
