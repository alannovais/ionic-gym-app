import {
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

interface IPayments {
  id: number;
  name: string;
  amount: number;
  date: string;
  status: string;
}
const Payments: React.FC = () => {
  const payments: IPayments[] = [
    {
      id: 1,
      name: '<NAME>',
      amount: 100,
      date: '2021-01-01',
      status: 'TO_PAY',
    },
    {
      id: 2,
      name: '<NAME>',
      amount: 100,
      date: '2021-01-01',
      status: 'TO_PAY',
    },
    {
      id: 3,
      name: '<NAME>',
      amount: 100,
      date: '2021-01-01',
      status: 'TO_PAY',
    },
    {
      id: 4,
      name: '<NAME>',
      amount: 100,
      date: '2021-01-01',
      status: 'TO_PAY',
    },
    {
      id: 5,
      name: '<NAME>',
      amount: 100,
      date: '2021-01-01',
      status: 'TO_PAY',
    },
  ];
  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Payments</IonTitle>
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
