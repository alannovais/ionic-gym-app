import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { SwipperWorkoutComponent } from '../../components';
import { WeekDays } from '../../constants/Contants';
import { PlanService } from '../../services/PlanService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';
import '../../theme/variables.scss';

const Workout: React.FC = () => {
  const weekDays = React.useRef(WeekDays);
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const plan = selector((state) => state.plans.data);

  React.useEffect(() => {
    dispatch(PlanService.getAll());
  }, []);

  return (
    <IonPage>
      <SwipperWorkoutComponent weekDays={weekDays.current} plan={plan} />
    </IonPage>
  );
};

export default Workout;
