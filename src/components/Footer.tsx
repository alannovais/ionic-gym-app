import { IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import {
  barbellOutline,
  cardOutline,
  homeOutline,
  mailOutline,
  timerOutline,
} from 'ionicons/icons';
import './Footer.css';

export function Footer() {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="workout" href="/workout">
        <IonIcon icon={barbellOutline} />
        <IonLabel>Treino</IonLabel>
      </IonTabButton>

      <IonTabButton tab="history" href="/history">
        <IonIcon icon={timerOutline} />
        <IonLabel>Histórico</IonLabel>
      </IonTabButton>

      <IonTabButton tab="home" href="/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Meu espaço</IonLabel>
      </IonTabButton>

      <IonTabButton tab="payments" href="/payments">
        <IonIcon icon={cardOutline} />
        <IonLabel>Pagamentos</IonLabel>
      </IonTabButton>

      <IonTabButton tab="messages" href="/messages">
        <IonIcon icon={mailOutline} />
        <IonLabel>Menssagens</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
}
