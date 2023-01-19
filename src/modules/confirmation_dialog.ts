import { Dialog } from 'quasar';

import ConfirmationDialog from '../components/ConfirmationDialog.vue';

export function confirmDiscard() {
  return Dialog.create({
    component: ConfirmationDialog,
    componentProps: {
      dialogProps: {
        persistent: true,
      },
    },
  });
}
