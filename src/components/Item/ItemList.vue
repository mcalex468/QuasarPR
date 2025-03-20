<template>
  <q-page padding>
    <q-input v-model="search" label="Buscar localización..." outlined dense />

    <q-table
      :rows="filteredLocations"
      :columns="columns"
      row-key="id"
      @row-click="selectItem"
    />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { fetchItems } from "@/api/api.js";

const locations = ref([]);
const search = ref("");

const columns = [
  { name: "id", label: "ID", field: "id", align: "left" },
  { name: "name", label: "Nombre", field: "name", align: "left" },
  { name: "type", label: "Tipo", field: "type", align: "left" }
];

const filteredLocations = computed(() =>
  locations.value.filter((loc) =>
    loc.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

async function loadLocations() {
  locations.value = await fetchItems();
}

function selectItem(_, row) {
  console.log("Seleccionado:", row);
}

onMounted(loadLocations);
</script>
