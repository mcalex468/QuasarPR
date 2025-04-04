<script setup>
import { fetchPokemons } from '../../api/api.js';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pokemons = ref([]);
const loading = ref(true);
const itemsToShow = ref(25); // Valor inicial (mostrar 25 Pokémon)
const filteredPokemons = ref([]); // Array para los Pokémon filtrados

// Función para obtener los Pokémon
const fetchAndFilterPokemons = async () => {
  loading.value = true;
  pokemons.value = await fetchPokemons();
  filteredPokemons.value = pokemons.value.slice(0, itemsToShow.value);
  loading.value = false;
};

// Llamar a la función cuando se monta el componente
onMounted(fetchAndFilterPokemons);

// Actualizar la lista de Pokémon mostrados cuando el valor de itemsToShow cambie
const updateFilter = () => {
  filteredPokemons.value = pokemons.value.slice(0, itemsToShow.value);
};

// Función para navegar al detalle de un Pokémon
const goToDetail = (name) => {
  router.push({ name: 'pokemon-detail', params: { name } }); // Cambiar 'id' a 'name'
};
</script>

<template>
  <q-page padding>
    <q-select v-model="itemsToShow" :options="[25, 50, 100]" label="Seleccionar número de Pokémon"
      @update:model-value="updateFilter" class="q-mb-md" />

    <q-card v-if="loading">
      <q-card-section>Loading Pokémon list...</q-card-section>
    </q-card>

    <q-list v-else bordered separator>
      <q-item v-for="(pokemon, index) in filteredPokemons" :key="index" clickable @click="goToDetail(pokemon.name)">
        <q-item-section>{{ pokemon.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
