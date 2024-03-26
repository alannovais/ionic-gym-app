import { MonthComponent } from '@/components';
import { LoadingComponent } from '@/components';
import { getMonth } from '@/helpers/MomentParses';
import { HistoryService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
import {
  IonContent,
  IonGrid,
  IonItemDivider,
  IonList,
  IonListHeader,
  IonPage,
} from '@ionic/react';
import React, { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const History: React.FC = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const history = selector((state) => state.history.data);
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    await dispatch(HistoryService.get());
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <IonPage>
      <IonContent scrollY>
        <LoadingComponent loading={loading} />
        <IonGrid>
          <IonList>
            {history.map((access, indexAccess) => (
              <IonGrid key={indexAccess}>
                <IonItemDivider>
                  <IonListHeader class="text-header-semibold">{`${getMonth(access.day)} ${new Date(access.day).getFullYear()}`}</IonListHeader>
                </IonItemDivider>
                <MonthComponent month={access.typeAccess} />
              </IonGrid>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default History;
