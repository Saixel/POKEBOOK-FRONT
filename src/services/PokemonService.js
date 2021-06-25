import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default {
  async listTypes() {
    const types = await api.get('/types')
    return types.data
  },

  async pokemonByType(type) {
    const pokemon = await api.get(`/pokemons?type=${type}`)
    return pokemon.data
  }
};