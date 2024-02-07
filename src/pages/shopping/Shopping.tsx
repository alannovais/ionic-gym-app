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
  IonRow
} from '@ionic/react';
import { bagAddOutline } from 'ionicons/icons';
import { ISaleItems } from '../../interfaces';
import teste from '../groupClass/teste.jpg';

const Shopping: React.FC<any> = () => {
  const itemsToSales: ISaleItems[] = [
    {
      id: 1,
      name: 'T-shirt',
      type: 'clothes',
      price: 30,
      image: '../groupClass/teste.jpg',
      description: 'T-shirt dry',
      quantityBySize: [
        {
          size: 'XS',
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      name: 'Avaliable Physical',
      type: 'Service',
      price: 10,
      image: '../groupClass/teste.jpg',
      description:
        'Avaliable Physical will check your currently conditin to make practice exercises',
      quantityBySize: null,
    },
    {
      id: 3,
      name: 'Avaliable Nutrition',
      type: 'Service',
      price: 10,
      image: '../groupClass/teste.jpg',
      description:
        'Avaliable Nutrition will give to you straight ahead path to earn your dreams',
      quantityBySize: null,
    },
    {
      id: 4,
      name: 'Avaliable Physical + Workout plan',
      type: 'Service',
      price: 25,
      image: '../groupClass/teste.jpg',
      description:
        'Avaliable Nutrition will give to you straight ahead path to earn your dreams',
      quantityBySize: null,
    },
  ];

  const poupToBuyItem = (id: Number) => {
    console.log(id);
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonRow>
          {itemsToSales.map((item, index) => (
            <IonCol>
              <IonCard key={index}>
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
