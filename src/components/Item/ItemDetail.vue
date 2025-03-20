<template>
  <q-page padding>
    <q-card v-if="item">
      <q-card-section>
        <div class="text-h5">{{ item.title }}</div>
        <p>{{ item.body }}</p>
      </q-card-section>
    </q-card>
    <q-card v-else>
      <q-card-section class="text-center text-grey">
        Cargando o no encontrado...
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getItemById } from "@/api/api.js";

const route = useRoute();
const item = ref(null);

onMounted(async () => {
  try {
    item.value = await getItemById(route.params.id);
  } catch (error) {
    console.error("Error cargando el ítem:", error);
    item.value = null;
  }
});
</script>
