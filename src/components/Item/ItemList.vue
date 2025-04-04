<template>
  <q-page padding>
    <q-input v-model="search" label="Buscar Pokémon" outlined clearable class="q-mb-md" />
    <q-select v-model="itemsToShow" :options="[25, 50, 100]" label="Cantidad" @update:model-value="updateFilter"
      class="q-mb-md" />

    <q-card v-if="loading">
      <q-card-section>Cargando...</q-card-section>
    </q-card>

    <q-list v-else bordered separator>
      <q-item v-for="pokemon in filteredPokemons" :key="pokemon.name" clickable @click="goToDetail(pokemon.name)">
        <q-item-section avatar>
          <q-avatar>
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(pokemon.url)}.png`" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ pokemon.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchPokemons } from '../../api/api';

const router = useRouter();
const pokemons = ref([]);
const loading = ref(true);
const itemsToShow = ref(25);
const search = ref("");

onMounted(async () => {
  pokemons.value = await fetchPokemons();
  loading.value = false;
});

const filteredPokemons = computed(() => {
  return pokemons.value
    .filter(pokemon => pokemon.name.toLowerCase().includes(search.value.toLowerCase()))
    .slice(0, itemsToShow.value);
});

const goToDetail = (name) => {
  router.push({ name: 'pokemon-detail', params: { name } });
};

const getPokemonId = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};
</script>