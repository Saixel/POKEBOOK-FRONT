<template>
  <div class="logged-home">
    <NavBar />
    <PokemonList />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import PokemonList from "@/components/PokemonList.vue"

export default {
  name: "LoggedHome'",
  components: {
    NavBar,
    PokemonList
  }
}
</script>

<style>

</style>
