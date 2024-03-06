import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  cartOutline,
  globeOutline,
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoWhatsapp,
  mailOutline,
  statsChartOutline,
  timerOutline,
} from 'ionicons/icons';
import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '../../store';

export const HubPage: React.FC<any> = () => {
  const history = useHistory();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const company = selector((state) => state.company.data);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold font-main-color">Hub</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonList lines="full">
                <IonItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/hub-place/evolution');
                  }}>
                  <IonIcon icon={statsChartOutline} slot="start" />
                  <IonLabel class="text-header-semibold" style={{}}>
                    Evolução
                  </IonLabel>
                </IonItem>

                <IonItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/hub-place/history');
                  }}>
                  <IonIcon icon={timerOutline} slot="start" />
                  <IonLabel class="text-header-semibold" style={{}}>
                    Histórico
                  </IonLabel>
                </IonItem>

                <IonItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/hub-place/messages');
                  }}>
                  <IonIcon icon={mailOutline} slot="start" />
                  <IonLabel class="text-header-semibold" style={{}}>
                    Menssagens
                  </IonLabel>
                </IonItem>

                <IonItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/hub-place/shopping');
                  }}>
                  <IonIcon icon={cartOutline} slot="start" />
                  <IonLabel class="text-header-semibold" style={{}}>
                    Shooping
                  </IonLabel>
                </IonItem>

                {company?.socialMidia?.facebook && (
                  <IonItem
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = company.socialMidia?.facebook?.url;
                    }}>
                    <IonIcon icon={logoFacebook} slot="start" />
                    <IonLabel class="text-header-semibold" style={{}}>
                      Facebook
                    </IonLabel>
                    <IonLabel slot="end">
                      {company.socialMidia.facebook?.tag}
                    </IonLabel>
                  </IonItem>
                )}

                {company?.socialMidia?.instagram && (
                  <IonItem
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        company.socialMidia?.instagram?.url;
                    }}>
                    <IonIcon icon={logoInstagram} slot="start" />
                    <IonLabel class="text-header-semibold" style={{}}>
                      Instagram
                    </IonLabel>
                    <IonLabel slot="end">
                      {company.socialMidia.instagram?.tag}
                    </IonLabel>
                  </IonItem>
                )}

                {company?.socialMidia?.whatsapp && (
                  <IonItem
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = company.socialMidia?.whatsapp?.url;
                    }}>
                    <IonIcon icon={logoWhatsapp} slot="start" />
                    <IonLabel class="text-header-semibold" style={{}}>
                      Whatsapp
                    </IonLabel>
                    <IonLabel slot="end">
                      {company.socialMidia.whatsapp?.phone}
                    </IonLabel>
                  </IonItem>
                )}

                {company?.socialMidia?.linkedin && (
                  <IonItem
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = company.socialMidia?.linkedin?.url;
                    }}>
                    <IonIcon icon={logoLinkedin} slot="start" />
                    <IonLabel class="text-header-semibold" style={{}}>
                      Linkedin
                    </IonLabel>
                    <IonLabel slot="end">
                      {company.socialMidia.linkedin?.tag}
                    </IonLabel>
                  </IonItem>
                )}

                {company.socialMidia?.site && (
                  <IonItem
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = company.socialMidia?.site?.url;
                    }}>
                    <IonIcon icon={globeOutline} slot="start" />
                    <IonLabel class="text-header-semibold" style={{}}>
                      Site
                    </IonLabel>
                    <IonLabel slot="end">
                      {company.socialMidia.site?.name}
                    </IonLabel>
                  </IonItem>
                )}
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
