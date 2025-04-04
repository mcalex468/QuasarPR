<script setup>
import { fetchPokemons } from '../../api/api.js';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pokemons = ref([]);
const loading = ref(true);

onMounted(async () => {
  pokemons.value = await fetchPokemons();
  loading.value = false;
});

const goToDetail = (name) => {
  router.push({ name: 'pokemon-detail', params: { id: name } });
};
</script>

<template>
  <q-page padding>
    <q-card v-if="loading">
      <q-card-section>Loading Pokémon list...</q-card-section>
    </q-card>

    <q-list v-else bordered separator>
      <q-item v-for="(pokemon, index) in pokemons" :key="index" clickable @click="goToDetail(pokemon.name)">
        <q-item-section>{{ pokemon.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
