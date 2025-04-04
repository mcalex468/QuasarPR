import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000';

// Arrays locales para almacenar los datos
let localData = [];
let pokemonDetails = {}; // Objeto para almacenar detalles de un Pokémon específico

// Obtener todos los Pokémon y almacenarlos localmente
async function fetchPokemons() {
  try {
    const response = await axios.get(API_URL);
    localData = response.data.results;
    return localData;
  } catch (error) {
    console.error('Error al obtener la lista de Pokémon:', error);
    return [];
  }
}

// Obtener detalles de un Pokémon por ID o nombre y almacenarlos localmente
async function fetchPokemonDetails(identifier) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
    pokemonDetails = response.data;
    return pokemonDetails;
  } catch (error) {
    console.error('Error al obtener detalles del Pokémon:', error);
    return null;
  }
}

export { fetchPokemons, fetchPokemonDetails, localData, pokemonDetails };
