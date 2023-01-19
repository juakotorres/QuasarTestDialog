<template>
  <q-dialog v-model="opened" @update:model-value="null">
    <q-card style="min-width: 500px; min-height: 500px">
      <q-bar>
        <q-toolbar-title>
          <span>Title</span>
        </q-toolbar-title>
        <q-space></q-space>
      </q-bar>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { confirmDiscard } from '../modules/confirmation_dialog';

const props = defineProps<{
  modelValue: boolean;
}>();

const emits = defineEmits(['update:model-value']);

const opened = computed({
  get(): boolean {
    return props.modelValue;
  },
  set(value: boolean) {
    if (value) {
      emits('update:model-value', value);
      return;
    }

    confirmDiscard().onOk(() => {
      emits('update:model-value', value);
    });
  },
});
</script>
