import { formatDate } from '@/helpers/MomentParses';
import { PaymentsService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
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
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const Payments: React.FC = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch<AppDispatch>();
  const payments = selector((state) => state.payments.data);

  React.useEffect(() => {
    dispatch(PaymentsService.get());
  }, [payments, dispatch]);

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold">Pagamentos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel class="text-header-semibold">Últimos pagamentos</IonLabel>
          </IonItemDivider>
          {payments.map((payment, indexPayment) => {
            if (payment.status === 'PAID')
              return (
                <IonItem key={indexPayment}>
                  <IonLabel class="text-sencondary">{`${payment.name} - ${payment.amount},00 $`}</IonLabel>
                  <IonLabel class="text-sencondary">
                    {formatDate(payment.date)}
                  </IonLabel>
                </IonItem>
              );
          })}
        </IonItemGroup>

        <IonItemGroup style={{ marginTop: 16 }}>
          <IonItemDivider>
            <IonLabel class="text-header-semibold">Pagamentos futuros</IonLabel>
          </IonItemDivider>
          {payments.map((payment, indexPayment) => {
            if (payment.status === 'TO_PAY')
              return (
                <IonItem key={indexPayment}>
                  <IonLabel class="text-sencondary">{`${payment.name} - ${payment.amount},00 $`}</IonLabel>
                  <IonLabel class="text-sencondary">
                    {formatDate(payment.date)}
                  </IonLabel>
                </IonItem>
              );
          })}
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Payments;
