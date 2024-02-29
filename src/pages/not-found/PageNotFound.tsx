import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import React from 'react';

export const PageNotFound: React.FC<{}> = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold">Page not found</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};
