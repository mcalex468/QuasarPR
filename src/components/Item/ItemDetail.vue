<template>
    <q-page>
        <q-card v-if="item">
            <q-card-section>
                <div class="text-h5">{{ item.title }}</div>
                <p>{{ item.body }}</p>
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getItemById } from 'src/api.js';
export default {
    setup() {
        const route = useRoute();
        const item = ref(null);
        onMounted(async () => item.value = await getItemById(route.params.id));
        return { item };
    }
};
</script>