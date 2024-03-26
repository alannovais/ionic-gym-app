import { SwipperWorkoutComponent } from '@/components';
import { LoadingComponent } from '@/components/loading/LoadingComponent';
import { WeekDays } from '@/constants/Contants';
import { PlanService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const Workout: React.FC = () => {
  const weekDays = React.useRef(WeekDays);
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const plan = selector((state) => state.plans.data);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    await dispatch(PlanService.getAll());
    setLoading(false);
  };
  React.useEffect(() => {
    loadData();
  }, [loading]);

  return (
    <IonPage>
      <IonContent scrollY={false}>
        <LoadingComponent loading={loading} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-card-title">Planos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{ height: '90vh', marginTop: '2vh' }}>
          <SwipperWorkoutComponent weekDays={weekDays.current} plan={plan} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Workout;
