<template>
  <q-dialog persistent ref="dialogRef" @hide="$emit('hide')">
    <q-card class="q-dialog-plugin">
      <q-card-section> Click Ok to close the dialog </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onClickOk" />
        <q-btn color="primary" label="Cancel" @click="onClickCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { QDialog, useDialogPluginComponent } from 'quasar';

const { dialogRef } = useDialogPluginComponent()

const emits = defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const onClickOk = () => {
  emits('ok');
  emits('hide');
};

const onClickCancel = () => {
  emits('hide');
};
</script>
