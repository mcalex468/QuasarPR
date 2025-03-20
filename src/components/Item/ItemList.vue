<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h5">Lista de Ubicaciones</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="search" label="Buscar ubicación..." outlined dense clearable />
      </q-card-section>

      <q-table :rows="filteredLocations" :columns="columns" row-key="id" :pagination="pagination">
        <template v-slot:body-cell-name="props">
          <q-td :props="props">
            <q-btn flat color="primary" @click="viewDetail(props.row.id)">
              {{ props.row.name }}
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { fetchItems } from 'src/api/api.js';

export default {
  setup() {
    const locations = ref([]);
    const search = ref('');

    onMounted(async () => {
      locations.value = await fetchItems();
    });

    const filteredLocations = computed(() =>
      locations.value.filter((location) =>
        location.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const viewDetail = (id) => {
      console.log(`Ir a detalle de la ubicación ${id}`);
    };

    const columns = [
      { name: 'id', label: 'ID', align: 'left', field: 'id' },
      { name: 'name', label: 'Nombre', align: 'left', field: 'name' },
      { name: 'type', label: 'Tipo', align: 'left', field: 'type' },
      { name: 'dimension', label: 'Dimensión', align: 'left', field: 'dimension' },
    ];

    const pagination = ref({ rowsPerPage: 5 });

    return { search, locations, filteredLocations, columns, viewDetail, pagination };
  }
};
</script>

<style scoped>
.q-card {
  max-width: 800px;
  margin: auto;
}
</style>
