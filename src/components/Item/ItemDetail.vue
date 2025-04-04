<script setup>
import { useRoute, useRouter } from 'vue-router'; // Importa useRouter
import { ref, onMounted } from 'vue';
import { fetchPokemonDetails } from '../../api/api.js';

const route = useRoute();
const router = useRouter(); // Inicializa useRouter
const pokemonName = route.params.name; // Obtener el nombre desde los parámetros de la ruta

const pokemonDetail = ref(null);
const loading = ref(true);

// Función para obtener los detalles del Pokémon
const getPokemonDetail = async () => {
  loading.value = true;
  pokemonDetail.value = await fetchPokemonDetails(pokemonName); // Usar el nombre para obtener detalles
  loading.value = false;
};

onMounted(getPokemonDetail);

// Función para navegar hacia atrás a la lista de Pokémon
const goBack = () => {
  router.push('/pokemons'); // Asegúrate de que la ruta '/pokemon-list' sea la correcta en tu aplicación
};
</script>

<template>
  <q-page padding>
    <q-card v-if="loading">
      <q-card-section>Loading Pokémon details...</q-card-section>
    </q-card>

    <q-card v-else>
      <q-card-section>
        <div class="text-h5">{{ pokemonDetail.name }}</div>
        <div><strong>Type:</strong> {{pokemonDetail.types.map(type => type.type.name).join(', ')}}</div>
        <div><strong>Height:</strong> {{ pokemonDetail.height }}</div>
        <div><strong>Weight:</strong> {{ pokemonDetail.weight }}</div>
        <div><strong>Abilities:</strong> {{pokemonDetail.abilities.map(ability => ability.ability.name).join(', ')}}
        </div>
        <div><strong>Stats:</strong>
          <ul>
            <li v-for="(stat, index) in pokemonDetail.stats" :key="index">{{ stat.stat.name }}: {{ stat.base_stat }}
            </li>
          </ul>
        </div>
      </q-card-section>

      <!-- Botón de retroceso -->
      <q-card-actions>
        <q-btn label="Back to List" @click="goBack" color="primary" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
