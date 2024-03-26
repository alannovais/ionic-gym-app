import { LoadingComponent } from '@/components';
import { MessageService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const Messages: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const messages = selector((state) => state.messages.data);
  const [present] = useIonToast();
  const [loading, setLoading] = useState<boolean>(false);

  // React.useEffect(() => {}, [loading]);

  const deleteMessages = (id: number) => {
    try {
      setLoading(true);
      //call Api and remove the reservation
      present({
        message: `Mensagem foi apagada com sucesso!`,
        duration: 5000,
        position: 'bottom',
        color: 'success',
      });
    } catch {
      present({
        message: `Algo aconteceu, por favor tente novamente!`,
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
    } finally {
      setLoading(true);
    }
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <LoadingComponent loading={loading} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header">Menssagens</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid style={{ marginTop: 5 }}>
          {messages.map((item, index) => (
            <IonList key={index} lines="full">
              <IonItemSliding>
                <IonItem button>
                  <IonLabel>
                    <IonLabel class="text-header-semibold margin-bottom-8">
                      {item.title}
                    </IonLabel>
                    <IonLabel class="text-secondary">{item.body}</IonLabel>
                  </IonLabel>
                  <IonNote slot="end"></IonNote>
                </IonItem>
                <IonItemOptions>
                  <IonItemOption
                    color="danger"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteMessages(item.id);
                    }}>
                    <IonIcon icon={trashOutline} className="color-trash">
                      Apagar
                    </IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            </IonList>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Messages;
