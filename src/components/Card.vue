<template>
  <div class="poke-card">
    <img src="../assets/typeicon.png" alt="">
    <h3>{{ pokemonType }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    pokemonType: String
  }
}
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  margin: 5px;
  margin-bottom: -20px;
}
.poke-card {
  background-color: azure;
  border: 2px solid black;
  border-radius: 10px;
  margin: 5px;
}
.poke-card:hover {
  background-color: lightgray;
}
</style>