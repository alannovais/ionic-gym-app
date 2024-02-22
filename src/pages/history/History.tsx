import {
  IonContent,
  IonGrid,
  IonList,
  IonListHeader,
  IonPage,
} from '@ionic/react';
import * as moment from 'moment-timezone';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import MonthComponent from '../../components/history/MonthComponent';
import { HistoryService } from '../../services/HistoryService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';
import '../../theme/variables.css'

const History: React.FC = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const history = selector((state) => state.history.data);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(HistoryService.get());
  }, []);

  let teste = moment().subtract(1, 'month').startOf('month').format('MMMM');
  return (
    <IonPage>
      <IonContent scrollY>
        <IonGrid>
          <IonList>
            {history.map((access, indexAccess) => (
              <div key={indexAccess}>
                <IonListHeader class='text-header-semibold'>{`${teste} ${new Date(access.day).getFullYear()}`}</IonListHeader>
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
