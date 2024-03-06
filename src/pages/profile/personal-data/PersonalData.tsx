import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import React from 'react';

export const PersonalData: React.FC<any> = () => {
  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel class="text-secondary">
              Data de nascimento: 08/06/1994
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel class="text-secondary">Idade: 29</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel class="text-secondary">Peso: 85,3kg</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel class="text-secondary">Objetivo: Ganho de massa</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
