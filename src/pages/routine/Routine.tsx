import {
  IonCard,
  IonCardContent,
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
import { useRef } from 'react';
import { useRouteMatch } from 'react-router';
import WorkoutDayComponent from '../../components/workout/WorkoutDayComponent';
import { WorkoutDayMock } from '../../mocks/WorkoutDayMock';

const Routine: React.FC = () => {
  const workoutDay = WorkoutDayMock;
  const route = useRouteMatch();
  const routineLoad = useRef(
    workoutDay.find((element) => {
      if (element?.id === Number(route.params?.id)) return element;
    }) || [],
  );

  const getChekedExercise = (id: number) => {
    console.log('workout ', id);
  };

  const handleFinishWorkout = () => {
    //open modal to confirm, after toggle change;
    return false;
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Segunda - Plan 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          {routineLoad.current?.routine.length > 0 && (
            <IonCardContent>
              <IonGrid>
                <IonRow class="ion-justify-content-end">
                  <IonToggle checked={handleFinishWorkout()}>
                    Finalize seu treino
                  </IonToggle>
                </IonRow>
                <IonList lines="full">
                  {routineLoad.current.routine.map((routine, rIndex) => (
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
            </IonCardContent>
          )}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Routine;
