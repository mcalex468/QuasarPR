<template>
    <q-form @submit.prevent="$emit('save', item)">
        <q-input v-model="item.title" label="Título" required />
        <q-input v-model="item.body" label="Contenido" type="textarea" required />
        <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>
</template>
<script>
import { ref } from 'vue';
export default { setup() { return { item: ref({ title: '', body: '' }) }; } };
</script>