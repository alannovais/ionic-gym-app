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
import { TypedUseSelectorHook } from 'react-redux';
import { useHistory } from 'react-router';
import './Porfile.scss';

import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const history = useHistory();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const user = selector((state) => state.user.data);

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
            <IonTitle class="text-header-semibold">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol class="align-img-profile-center">
              <IonRow className="container-img">
                <IonImg
                  class="image-profile"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                />
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonLabel>
              <IonLabel class="text-secondary">Olá, {user.name}!</IonLabel>
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
                  <IonLabel class="text-secondary">Alterar senha</IonLabel>
                </IonItem>
                <IonItem
                  button
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/profile/${user.id}`);
                  }}>
                  <IonLabel class="text-secondary">Dados Pessoais</IonLabel>
                </IonItem>
                <IonItem
                  button
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/profile/${user.id}/payments`);
                  }}>
                  <IonLabel class="text-secondary">
                    Hístorico de pagamentos
                  </IonLabel>
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
