import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { WeekDays } from '../../constants/Contants';
import { PlanService } from '../../services/PlanService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';

const Workout: React.FC = () => {
  const weekDays = React.useRef(WeekDays);
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const plan = selector((state) => state.plans.data);

  React.useEffect(() => {
    dispatch(PlanService.getAll());
  }, [plan, dispatch]);

  const history = useHistory();
  return (
    <IonPage>
      <IonContent scrollY={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Planos da semana</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}>
          <IonRow>
            {weekDays.current.map((day, index) => (
              <IonCol size="4" key={index} style={{ paddingRight: '0rem' }}>
                {plan.map(
                  (work, wIndex) =>
                    day === work.dayDefined && (
                      <IonButton
                        key={wIndex}
                        style={{
                          height: 130,
                          width: 110,
                          border: '1px solid',
                          borderColor: 'red',
                        }}
                        fill="clear"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(`/workout/routine/${work.id}`);
                        }}>
                        <IonRow class="ion-justify-content-center">
                          <p>
                            {day} <br /> {work.name}
                          </p>
                        </IonRow>
                      </IonButton>
                    ),
                )}
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Workout;
