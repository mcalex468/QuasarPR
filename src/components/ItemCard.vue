<template>
    <q-card class="q-mb-md">
        <q-card-section>
            <div class="text-h6">{{ item.title }}</div>
        </q-card-section>
        <q-card-actions>
            <q-btn flat label="Ver detalles" @click="$emit('view', item.id)" />
        </q-card-actions>
    </q-card>
</template>
<script>
export default {
    props: {
        item: Object
    }
};
</script>