import { useIonToast } from '@ionic/react';

const [present] = useIonToast();
export class Toasts {
  static cancelReservation = () => {
    present({
      message: `A reserva foi cancelada com sucesso!`,
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
  };
}
