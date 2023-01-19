<template>
  <q-btn color="primary" label="Open Dialog" @click="openDialog"></q-btn>
  <TestDialog v-model="dialogVisible"></TestDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TestDialog from './TestDialog.vue';

const dialogVisible = ref(false);

const openDialog = () => (dialogVisible.value = true);
</script>
