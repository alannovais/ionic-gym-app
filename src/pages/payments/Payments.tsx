import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IPayments } from '../../interfaces';
import { PaymentsMock } from '../../mocks/PaymentsMock';

const Payments: React.FC = () => {
  const payments: IPayments[] = PaymentsMock;
  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pagamentos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Últimos pagamentos</IonLabel>
          </IonItemDivider>
          {payments.map((payment, indexPayment) => (
            <IonItem key={indexPayment}>
              <IonLabel>{`${payment.name} - ${payment.amount},00 $`}</IonLabel>
              <IonLabel>{payment.date}</IonLabel>
            </IonItem>
          ))}
        </IonItemGroup>

        <IonItemGroup style={{ marginTop: 16 }}>
          <IonItemDivider>
            <IonLabel>Pagamentos futuros</IonLabel>
          </IonItemDivider>
          {payments.map((payment, indexPayment) => (
            <IonItem key={indexPayment}>
              <IonLabel>{`${payment.name} - ${payment.amount} $`}</IonLabel>
              <IonLabel>{payment.date}</IonLabel>
            </IonItem>
          ))}
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Payments;
