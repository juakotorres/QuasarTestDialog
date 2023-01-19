<template>
  <q-btn color="primary" label="Open Dialog" @click="openDialog"></q-btn>
  <q-btn color="primary" label="Open Fixed Dialog" @click="openFixedDialog"></q-btn>
  <TestDialog v-model="dialogVisible"></TestDialog>
  <TestDialog v-model="fixedDialogVisible" fixed-dialog></TestDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TestDialog from './TestDialog.vue';

const dialogVisible = ref(false);
const fixedDialogVisible = ref(false);

const openDialog = () => (dialogVisible.value = true);
const openFixedDialog = () => (fixedDialogVisible.value = true);
</script>
