import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Porfile.css';
import { useHistory } from 'react-router';

const Profile: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol class="align-img-profile-center">
              <div className="container-img">
                <IonImg
                  class="image-profile"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                />
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonLabel>
              <p style={{ fontWeight: 'bold' }}>Olá, Alan!</p>
            </IonLabel>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonItem
                  button
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/change-password');
                  }}>
                  Alterar senha
                </IonItem>
                <IonItem
                  button
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/payments');
                  }}>
                  Hístorico de pagamentos
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
