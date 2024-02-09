import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { IPayments } from '../../interfaces';
import { PaymentsService } from '../../services/PaymentsService';

const Payments: React.FC = () => {
  const [payments, setPayments] = React.useState<IPayments[]>(
    [] as IPayments[],
  );
  React.useEffect(() => {
    const loadData = async () => {
      const response = await PaymentsService.getPayments();
      setPayments(response);
    };
    loadData();
  });
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
          {payments.map((payment, indexPayment) => {
            if (payment.status === 'PAID')
              return (
                <IonItem key={indexPayment}>
                  <IonLabel>{`${payment.name} - ${payment.amount},00 $`}</IonLabel>
                  <IonLabel>{payment.date}</IonLabel>
                </IonItem>
              );
          })}
        </IonItemGroup>

        <IonItemGroup style={{ marginTop: 16 }}>
          <IonItemDivider>
            <IonLabel>Pagamentos futuros</IonLabel>
          </IonItemDivider>
          {payments.map((payment, indexPayment) => {
            if (payment.status === 'TO_PAY')
              return (
                <IonItem key={indexPayment}>
                  <IonLabel>{`${payment.name} - ${payment.amount},00 $`}</IonLabel>
                  <IonLabel>{payment.date}</IonLabel>
                </IonItem>
              );
          })}
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Payments;
