<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card class="my-card" bordered>
      <q-card-section class="q-pt-none">
        <div class="text-h5">Bienvenido a la App de Pokémon</div>

        <!-- Mostrar imagen actual -->
        <q-img :src="pokemonImage" alt="Imagen de Pokémon" class="q-mt-md"
          :style="{ width: '100px', height: '100px' }" />

        <p class="q-mt-md">
          Aquí podrás explorar la lista de Pokémon, ver sus detalles y mucho más.
        </p>

        <!-- Botones para cambiar la imagen -->
        <div class="q-mt-md">
          <q-btn flat label="Imagen 1" @click="changeImage(0)" class="q-mr-sm" />
          <q-btn flat label="Imagen 2" @click="changeImage(1)" class="q-mr-sm" />
          <q-btn flat label="Imagen 3" @click="changeImage(2)" class="q-mr-sm" />
          <q-btn flat label="Imagen 4" @click="changeImage(3)" class="q-mr-sm" />
          <q-btn flat label="Imagen 5" @click="changeImage(4)" class="q-mr-sm" />
        </div>

        <q-btn label="Ver Lista de Pokémon" color="primary" @click="goToPokemons" class="q-mt-md" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

// Array con las URLs de las 5 imágenes
const pokemonImages = [
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', // Pikachu
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', // Charmander
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', // Bulbasaur
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', // Squirtle
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', // Pidgey
];

// Hacemos que pokemonImage sea reactiva
const pokemonImage = ref(pokemonImages[0]); // Establecer la primera imagen por defecto

// Función para cambiar la imagen
const changeImage = (index) => {
  pokemonImage.value = pokemonImages[index];
};

// Redirigir a la lista de Pokémon
const goToPokemons = () => {
  router.push('/pokemons');
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  width: 100%;
  text-align: center;
}
</style>
