import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react';
import WorkoutDayComponent from '../../components/workout/WorkoutDayComponent';
import { WeekDays } from '../../constants/Contants';
import { WorkoutDayMock } from '../../mocks/WorkoutDayMock';
import { useHistory } from 'react-router';

const Workout: React.FC = () => {
  const weekDays = WeekDays;
  const workoutDay = WorkoutDayMock;
  const history = useHistory();
  return (
    <IonPage>
      <IonContent scrollY={true}>
        <IonGrid>
          <IonRow class="ion-align-items-center">
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
                          history.push('/workout/routine');
                        }}>
                        <IonRow class="ion-justify-content-center">
                          <h4>{day}</h4>
                          <h5>{work.name}</h5>
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
