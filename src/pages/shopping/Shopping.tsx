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
  IonPage,
  IonRow,
} from '@ionic/react';
import { bagAddOutline } from 'ionicons/icons';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { SalesService } from '../../services/SalesService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';
import teste from '../groupClass/teste.jpg';

const Shopping: React.FC<any> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const itemsToSales = selector((state) => state.sales.data);

  React.useEffect(() => {
    dispatch(SalesService.get());
  }, [itemsToSales, dispatch]);

  const poupToBuyItem = (id: Number) => {
    console.log(id);
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonRow>
          {itemsToSales.map((item, index) => (
            <IonCol key={index}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonRow class="ion-justify-content-center">
                      <IonImg
                        src={teste}
                        alt="product image"
                        style={{ heigth: '20rem', width: '15rem' }}
                      />
                    </IonRow>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {item.name}
                  </p>
                  <p>{item.description}</p>
                  <IonRow class="ion-justify-content-end">
                    <IonButton
                      fill="clear"
                      onClick={(e) => {
                        e.preventDefault();
                        poupToBuyItem(item.id);
                      }}>
                      <IonIcon color="green" icon={bagAddOutline} />
                    </IonButton>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Shopping;
