import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
} from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import './index.scss';

export const ProfileComponent: React.FC = () => {
  const history = useHistory();

  return (
    <div
      className='dawn-color'
      onClick={(e) => {
        e.preventDefault();
        history.push('/profile');
      }}>
      <IonCard style={{ position: 'relative', top: '0.5rem' }}>
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol size="4" class='ion-align-self-center'>
                <IonImg
                  style={{ width: '8rem', height: '10rem' }}
                  class="image-profile"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                />
              </IonCol>
              <IonCol class='ion-align-self-center'>
                <IonRow>
                  <IonLabel>Quant. Treinos mês: 20</IonLabel>
                </IonRow>
                <IonRow>
                  <IonLabel>Plano: Anual + toalha</IonLabel>
                </IonRow>
                <IonRow>
                  <IonLabel>Sócio desde: 07/09/2023</IonLabel>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};
