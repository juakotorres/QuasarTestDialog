import { Dialog } from 'quasar';

import ConfirmationDialog from '../components/ConfirmationDialog.vue';
import FixedConfirmationDialog from '../components/FixedConfirmationDialog.vue';

export function confirmDiscard(fixedDialog: boolean) {
  return Dialog.create({
    component: fixedDialog ? FixedConfirmationDialog : ConfirmationDialog,
  });
}
