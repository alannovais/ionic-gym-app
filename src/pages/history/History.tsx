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
import { HisotryMock } from '../../mocks/HistoryMock';

const History: React.FC = () => {
  const history: IHistoryDay[] = HisotryMock;

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
