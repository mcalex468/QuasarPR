<script setup>
import { useCharacters } from '../../api/api.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const { characters, loading } = useCharacters();

const columns = [
  { name: 'name', label: 'Name', align: 'left', field: 'name' },
  { name: 'type', label: 'Type', align: 'left', field: 'type' },
  { name: 'dimension', label: 'Dimension', align: 'left', field: 'dimension' }
];

const viewDetails = (id) => {
  router.push(`/item/${id}`);
};
</script>

<template>
  <q-page>
    <q-table v-if="!loading" :rows="characters" :columns="columns" row-key="id">
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <q-btn flat dense color="primary" @click="viewDetails(props.row.id)">
            {{ props.row.name }}
          </q-btn>
        </q-td>
      </template>
    </q-table>
    <q-spinner v-else size="lg" color="primary" />
  </q-page>
</template>
