<template>
  <q-dialog ref="dialogRef" persistent @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section> Click Ok to close the dialog </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { QDialog, useDialogPluginComponent } from 'quasar';

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const onOKClick = () => {
  // on OK, it is REQUIRED to
  // call onDialogOK (with optional payload)
  onDialogOK();
};

const onCancelClick = () => {
  onDialogHide();
};
</script>
