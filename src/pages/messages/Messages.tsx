import {
    IonContent,
    IonGrid,
    IonHeader,
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
} from '@ionic/react';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MessageService } from '../../services/MessageService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';
import '../../theme/variables.css';

const Messages: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selector: TypedUseSelectorHook<RootState> = useSelector;

    const messages = selector((state) => state.messages.data);

    React.useEffect(() => {
        dispatch(MessageService.get());
    }, []);

    const deleteMessages = (id: number) => {
        //Todo remove
    };

    return (
        <IonPage>
            <IonContent scrollY>
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
                                        <IonLabel class="text-secondary">
                                            {item.body}
                                        </IonLabel>
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
                                        <IonLabel class="text-action">
                                            Apagar
                                        </IonLabel>
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
