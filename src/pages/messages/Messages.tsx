import {
  IonButton,
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
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IMessage } from '../../interfaces';
import { MessageMock } from '../../mocks/MessageMock';
import { listCircleOutline } from 'ionicons/icons';

const Messages: React.FC = () => {
  const [messages, setMessages] = React.useState<IMessage[]>(MessageMock);
  const history = useHistory();
  const deleteMessages = (id: number) => {
    //Todo remove
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menssagens</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {messages.map((item, index) => (
            <IonList key={index} lines="full">
              <IonItemSliding>
                <IonItem button>
                  {/* <div style={{ backgroundColor: 'red', height: 60, width: 60 }}>&nbsp;</div> */}
                  {/* <IonIcon color="danger" slot="start" icon={listCircleOutline} size="large"></IonIcon> */}
                  <IonLabel>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
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
                    Apagar
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
