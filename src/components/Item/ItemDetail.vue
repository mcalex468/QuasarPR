<script setup>
import { useCharacter } from '../../api/useCharacters';
import { useRoute } from 'vue-router';

const route = useRoute();
const { character, loading } = useCharacter(route.params.id);
</script>

<template>
  <q-page>
    <q-card v-if="!loading && character">
      <q-card-section>
        <div class="text-h5">{{ character.name }}</div>
        <div><strong>Type:</strong> {{ character.type }}</div>
        <div><strong>Dimension:</strong> {{ character.dimension }}</div>
        <div><strong>Residents:</strong> {{ character.residents.length }}</div>
      </q-card-section>
    </q-card>
    <q-card v-else>
      <q-card-section>Loading character data...</q-card-section>
    </q-card>
    <q-btn flat color="primary" @click="$router.back()" label="Back" />
  </q-page>
</template>
