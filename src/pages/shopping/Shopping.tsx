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
import { ISaleItems } from '../../interfaces';
import { SalesService } from '../../services/SalesService';
import teste from '../groupClass/teste.jpg';

const Shopping: React.FC<any> = () => {
  const [itemsToSales, setItemToSales] = React.useState<ISaleItems[]>(
    [] as ISaleItems[],
  );

  React.useEffect(() => {
    const loadData = async () => {
      const response = await SalesService.getItems();
      setItemToSales(response);
    };
    loadData();
  });

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
