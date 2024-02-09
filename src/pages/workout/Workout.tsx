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
import { useHistory } from 'react-router';
import { WeekDays } from '../../constants/Contants';
import { IPlan } from '../../interfaces';
import { WorkoutService } from '../../services/WorkoutService';

const Workout: React.FC = () => {
  const weekDays = React.useRef(WeekDays);
  const [workoutDay, setWorkoutDay] = React.useState<IPlan[]>([] as IPlan[]);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await WorkoutService.getAll();
      setWorkoutDay(response);
    };
    loadData();
  });

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
                {workoutDay.map(
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
