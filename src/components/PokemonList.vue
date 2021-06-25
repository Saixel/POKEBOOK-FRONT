<template>
  <div id="pokemon-list">
    <div class="pokemon-card" v-for="(value, idx) in types" :key="idx">
      <router-link :to="{ name: 'PokemonByType', params: { type: value } }">
        <Card :pokemonType="value" />
      </router-link>
    </div>
  </div>
</template>

<script>
import PokemonService from "@/services/PokemonService.js";
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      types: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    PokemonService.listTypes()
      .then((types) => {
        this.types = types;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
li {
  margin: 10px;
  list-style-type: none;
  font-size: 20px;
  font-weight: bold;
}
#pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>