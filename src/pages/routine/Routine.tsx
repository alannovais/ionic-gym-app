import {
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import WorkoutDayComponent from '../../components/workout/WorkoutDayComponent';
import { WorkoutDayMock } from '../../mocks/WorkoutDayMock';

const Routine: React.FC = () => {
  const workoutDay = WorkoutDayMock;

  const getChekedExercise = (id: number) => {
    console.log('workout ', id);
  };

  const handleFinishWorkout = () => {
    //open modal to confirm, after toggle change;
    return true;
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Segunda - Plan 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonToggle checked={handleFinishWorkout()}>
              Finalize seu treino
            </IonToggle>
          </IonRow>
          <IonList lines="full">
            {workoutDay[1].routine.map((routine, rIndex) => (
              <IonItem key={rIndex} style={{}}>
                <IonLabel>
                  {routine.muscle}
                  <WorkoutDayComponent
                    routine={routine}
                    exerciseId={(e: number) => getChekedExercise(e)}
                  />
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Routine;
