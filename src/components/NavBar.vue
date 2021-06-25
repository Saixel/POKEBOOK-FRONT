<template>
  <div id="nav-bar">
    <h1>POKEBOOK</h1>
    <button @click="goHome"></button>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    goHome() {
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
#nav-bar {
  width: 100vw;
  height: 80px;
  background-color: red;
  color: white;
  border-bottom: 10px solid black;
  position: relative;
  margin-bottom: 50px;
}
h1 {
  padding-left: 10px;
  position: absolute;
  font-size: 50px;
  top: 50%;
  margin-top: -25px;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
button {
  position: absolute;
  top: 50%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid black;
}
button:hover {
  background-color: lightgrey;
}
</style>