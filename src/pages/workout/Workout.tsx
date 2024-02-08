import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { WeekDays } from '../../constants/Contants';
import { WorkoutDayMock } from '../../mocks/WorkoutDayMock';

const Workout: React.FC = () => {
  const weekDays = WeekDays;
  const workoutDay = WorkoutDayMock;
  const history = useHistory();
  return (
    <IonPage>
      <IonContent scrollY={true}>
        <IonGrid
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}>
          <IonRow>
            {weekDays.map((day, index) => (
              <IonCol size="4" key={index}>
                {workoutDay.map(
                  (work, wIndex) =>
                    day === work.dayDefined && (
                      <IonButton
                        key={wIndex}
                        style={{ height: 135, width: 135 }}
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
