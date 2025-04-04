<script setup>
import { fetchPokemonDetails } from '../../api/api.js';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pokemon = ref(null);
const loading = ref(true);

onMounted(async () => {
  pokemon.value = await fetchPokemonDetails(route.params.id);
  loading.value = false;
});
</script>

<template>
  <q-page>
    <q-card v-if="!loading && pokemon">
      <q-card-section>
        <div class="text-h5">{{ pokemon.name }}</div>
        <div><strong>Height:</strong> {{ pokemon.height }}</div>
        <div><strong>Weight:</strong> {{ pokemon.weight }}</div>
        <div><strong>Base Experience:</strong> {{ pokemon.base_experience }}</div>
        <div>
          <strong>Types:</strong>
          <span v-for="(type, index) in pokemon.types" :key="index">
            {{ type.type.name }}{{ index < pokemon.types.length - 1 ? ', ' : '' }} </span>
        </div>
      </q-card-section>
    </q-card>
    <q-card v-else>
      <q-card-section>Loading Pokémon data...</q-card-section>
    </q-card>
    <q-btn flat color="primary" @click="$router.back()" label="Back" />
  </q-page>
</template>
