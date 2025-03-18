<template>
    <q-page>
        <search-bar v-model="search" />
        <q-table :rows="filteredItems" :columns="columns" row-key="id">
            <template v-slot:body-cell-name="props">
                <q-td :props="props">
                    <q-btn flat color="primary" @click="viewDetail(props.row.id)">{{ props.row.title }}</q-btn>
                </q-td>
            </template>
        </q-table>
    </q-page>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
import { getItems } from 'src/api.js';
import SearchBar from 'src/components/SearchBar.vue';
export default {
    components: { SearchBar },
    setup() {
        const items = ref([]);
        const search = ref('');
        onMounted(async () => items.value = await getItems());
        const filteredItems = computed(() => items.value.filter(item => item.title.includes(search.value)));
        const viewDetail = (id) => console.log(`Ir a detalle ${id}`);
        return { items, search, filteredItems, viewDetail };
    }
};
</script>