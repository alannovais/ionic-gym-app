import {
  IonBadge,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
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
import React, { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { RootState } from '@/store';
import QrSvg from '@wojtekmaj/react-qr-svg';
import { MessageService } from '@/services';
import { AppDispatch } from '@/store/store';
import { LoadingComponent } from '@/components';

export const HubPage: React.FC<any> = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const company = selector((state) => state.company.data);
  const messageNumber = selector((state) => state.messages.countMessages);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    await dispatch(MessageService.get());
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();    
  }, [loading]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <LoadingComponent loading={loading} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold">Hub</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <section id="items-plus-menu">
                <IonCard style={{ width: '95vw', margin: '0 auto' }}>
                  <IonList lines="none">
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
                      <IonBadge slot="end">{messageNumber}</IonBadge>
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
                  </IonList>
                </IonCard>
              </section>
              <section id="social-information">
                <IonCard
                  style={{
                    width: '95vw',
                    margin: '0',
                    position: 'relative',
                    top: '0.5rem',
                  }}>
                  <IonList lines="none">
                    {company?.socialMidia?.facebook && (
                      <IonItem
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            company.socialMidia?.facebook?.url || '';
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
                            company.socialMidia?.instagram?.url || '';
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
                          window.location.href =
                            company.socialMidia?.whatsapp?.url || '';
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
                          window.location.href =
                            company.socialMidia?.linkedin?.url || '';
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
                          window.location.href =
                            company.socialMidia?.site?.url || '';
                        }}>
                        <IonIcon icon={globeOutline} slot="start" />
                        <IonLabel class="text-header-semibold" style={{}}>
                          Site
                        </IonLabel>
                        <IonLabel slot="end">
                          {company.socialMidia.site?.url}
                        </IonLabel>
                      </IonItem>
                    )}
                  </IonList>
                </IonCard>
              </section>
            </IonCol>
          </IonRow>
          {company?.qrcode && (
            <IonRow class="ion-justify-content-center">
              <div style={{ marginTop: '10vh' }}>
                <div>
                  <QrSvg value={company.qrcode} style={{ width: '10rem' }} />
                </div>
                <div>
                  <IonLabel class="text-secondary font-main-color">
                    Acesse com seu QrCode!
                  </IonLabel>
                </div>
              </div>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
