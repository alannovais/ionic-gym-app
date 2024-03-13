import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  useIonAlert,
  useIonToast
} from '@ionic/react';
import { bagAddOutline } from 'ionicons/icons';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { SalesService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
import teste from '@/pages/group-class/teste.jpg';


const Shopping: React.FC<any> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const itemsToSales = selector((state) => state.sales.data);
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();

  React.useEffect(() => {
    dispatch(SalesService.get());
  }, [itemsToSales, dispatch]);

  const onPopUpToBuyItem = (id: Number) => {
    presentAlert({
      message: 'Confirmar adição do item ao carrinho?',
      subHeader: `Adicionar item`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            //dispatch(SalesService.addItem(id));
            console.log(id);
            onChartShopping();
          },
        },
        {
          text: 'Não',
          handler: () => undefined,
        },
      ],
    });
  };

  const onChartShopping = () => {
    try {
      //open spinning
      //call Api and remove the reservation
      present({
        message: `Artigo adiconado ao carrinho!`,
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
      //end spinning
    }
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonRow>
          {itemsToSales.map((item, index) => (
            <IonCol size="6" key={index}>
              <IonCard
                style={{
                  height: 'auto',
                  padding: '0.5rem',
                }}>
                <IonImg
                  src={teste}
                  alt="product image"
                  style={{ width: '10rem' }}
                />
                <IonCardHeader>
                  <IonCardTitle class="text-card-title margin-bottom-8">
                    {item.name}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonLabel class="text-secondary">{item.description}</IonLabel>
                </IonCardContent>
                <IonRow class="ion-justify-content-end">
                  <IonButton
                    fill="clear"
                    onClick={(e) => {
                      e.preventDefault();
                      onPopUpToBuyItem(item.id);
                    }}>
                    <IonIcon color="green" icon={bagAddOutline} />
                  </IonButton>
                </IonRow>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Shopping;
