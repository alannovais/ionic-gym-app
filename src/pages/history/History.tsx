import {
  IonContent,
  IonGrid,
  IonList,
  IonListHeader,
  IonPage
} from '@ionic/react';
import * as moment from 'moment-timezone';
import MonthComponent from '../../components/history/MonthComponent';
import { IHistoryDay } from '../../interfaces';

const History: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();
  const history: IHistoryDay[] = [
    {
      day: currentDate,
      typeAccess: [
        {
          id: 1,
          type: 'Acesso',
          getIn: currentDate,
          getOut: currentDate,
        },
        {
          id: 2,
          type: 'Toalha',
          getIn: currentDate,
          getOut: currentDate,
        },
        {
          id: 3,
          type: 'Bebidas',
          getIn: currentDate,
          getOut: currentDate,
        },
      ],
    },
    {
      day: currentDate,
      typeAccess: [
        {
          id: 1,
          type: 'Acesso',
          getIn: currentDate,
          getOut: currentDate,
        },
        {
          id: 2,
          type: 'Toalha',
          getIn: currentDate,
          getOut: currentDate,
        },
        {
          id: 3,
          type: 'Bebidas',
          getIn: currentDate,
          getOut: currentDate,
        },
      ],
    },
    {
      day: currentDate,
      typeAccess: [
        {
          id: 1,
          type: 'Acesso',
          getIn: currentDate,
          getOut: currentDate,
        },
        {
          id: 2,
          type: 'Toalha',
          getIn: currentDate,
          getOut: currentDate,
        },
        {
          id: 3,
          type: 'Bebidas',
          getIn: currentDate,
          getOut: currentDate,
        },
      ],
    },
  ];
  let teste = moment().subtract(1, 'month').startOf('month').format('MMMM');
  return (
    <IonPage>
      <IonContent scrollY>
        <IonGrid>
          <IonList>
            {history.map((access, indexAccess) => (
              <div key={indexAccess}>
                <IonListHeader>{`${teste} ${new Date(access.day).getFullYear()}`}</IonListHeader>
                <MonthComponent month={access.typeAccess} />
              </div>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default History;
