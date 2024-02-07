import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import '@ionic/react/css/ionic-swiper.css';
import { cartOutline, personCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import 'swiper/css';
import AdvertisingsComponent from '../components/advertisings/AdvertisingsComponent';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              onClick={(e) => {
                e.preventDefault();
                history.push('/shopping');
              }}>
              <IonIcon icon={cartOutline} />
            </IonButton>
          </IonButtons>

          <IonButtons slot="end">
            <IonButton
              onClick={(e) => {
                e.preventDefault();
                history.push('/profile');
              }}>
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Company name</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AdvertisingsComponent />
        <IonCard
          onClick={(e) => {
            e.preventDefault();
            history.push('/schedule');
          }}>
          <IonGrid>
            <IonRow
              class="ion-align-items-center"
              style={{
                paddingLeft: 8,
              }}>
              <IonCol
                size="3"
                style={{
                  backgroundColor: 'red',
                  height: 80,
                  width: 100,
                }}>
                &nbsp;
              </IonCol>
              <IonCol>
                <IonCardHeader>
                  <IonCardTitle>Marcar Aulas</IonCardTitle>
                  <IonCardSubtitle>Power Step</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>Descrição da aula</IonCardContent>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
