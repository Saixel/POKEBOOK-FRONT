<template>
  <div>
    <NavBar />
    <h1>{{ typeM }}</h1>
    <hr>
    {{ pokemon }}
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import PokemonService from '@/services/PokemonService.js';

export default {
  name: "PokemonByType",
  data() {
    return {
      pokemon: []
    }
  },
  computed:{
    typeM() {
      return this.type.toUpperCase()
    }
  },
  components: {
    NavBar
  },
  props: {
    type: String,
  },
  async mounted() {
    this.pokemon = await PokemonService.pokemonByType(this.type)
  }
};
</script>

<style>
</style>