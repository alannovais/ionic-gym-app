import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  useIonAlert,
  useIonToast,
} from '@ionic/react';
import React from 'react';
import { IClass } from '../../interfaces';
import './UpCommingClasses.scss';

interface ComponentProps {
  classes: IClass[];
}

export const UpComingClassesComponent: React.FC<ComponentProps> = (props) => {
  const { classes } = props;
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  const onCancelReservation = (data: IClass) => {
    presentAlert({
      header: 'Cancelar aula',
      subHeader: `Deseja cancelar a reserva?`,
      message: `${data.name} - ${data.start_at} - ${data.end_at}`,
      buttons: [
        { text: 'Sim', handler: () => onTriggeredReservation(data) },
        { text: 'Não', handler: () => undefined },
      ],
    });
  };

  const onTriggeredReservation = (data: IClass) => {
    try {
      //open spinning
      //call Api and remove the reservation
      present({
        message: `A reserva cancelada com sucesso!`,
        duration: 5000,
        position: 'bottom',
        color: 'success',
      });
    } catch {
      present({
        message: `Reserva não pode ser cancelada, por favor tente novamente!`,
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
    } finally {
      //end spinning
    }
  };

  return (
    <>
      {classes !== undefined && (
        <>
          <div style={{ padding: '1rem', fontSize: '1.3rem' }}>
            <IonLabel class="text-card-title font-main-color">
              Aulas agendadas
            </IonLabel>
          </div>
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            {classes.map((data, index) => (
              <div
                key={index}
                style={{
                  flex: '0 0 auto', // Important for horizontal scrolling
                  width: '20rem', // Adjust based on your needs
                  height: 'auto', // Adjust based on your needs
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IonCard
                  style={{ width: '100%', heigth: '100%' }}
                  onClick={(e) => {
                    e.preventDefault();
                    onCancelReservation(data);
                  }}>
                  <IonCardContent>
                    <IonRow>
                      <IonLabel class="text-header-semibold" style={{}}>
                        {`${data.name} (${data.start_at} - ${data.end_at})`}
                      </IonLabel>
                    </IonRow>
                    <IonRow>
                      <IonLabel class="text-header-semibold" style={{}}>
                        {data.teacher.map((t, index) => (
                          <IonLabel key={index}>{t.name}</IonLabel>
                        ))}
                      </IonLabel>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
