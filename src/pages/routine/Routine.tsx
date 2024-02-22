import {
  IonCard,
  IonCardContent,
  IonCol,
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
  useIonAlert,
} from '@ionic/react';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import WorkoutDayComponent from '../../components/workout/WorkoutDayComponent';
import { WorkoutService } from '../../services/WorkoutService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';
import '../../theme/variables.css';

interface temp {
  workout: number;
  complete: boolean;
  day: Date;
}

const Routine: React.FC = () => {
  const route = useRouteMatch();
  const [workoutCompleted, setWorkoutCompleted] = React.useState(false);
  const [presentAlert] = useIonAlert();
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const loadRoutine = selector((state) => state.workouts.data);

  React.useEffect(() => {
    dispatch(WorkoutService.getWorkoutDay(route.params?.id));
  }, []);

  const getChekedExercise = (id: number) => {
    //save on store
    console.log('workout ', id);
  };

  const handleFinishWorkout = (data: any) => {
    data.preventDefault();
    data.stopPropagation();
    presentAlert({
      header: workoutCompleted ? 'Concluir treino' : 'Reabrir treino',
      subHeader: workoutCompleted
        ? `Treino finalizado?`
        : 'Deseja regressar o treino?',
      message: `${loadRoutine.dayDefined} - ${loadRoutine.name}`,
      buttons: [
        { text: 'Sim', handler: () => toggleClass(data) },
        { text: 'Não', handler: () => undefined },
      ],
    });
  };

  const toggleClass = (event: Event) => {
    console.log({
      workout: route.params?.id,
      complete: !workoutCompleted,
      day: new Date(),
    });
    setWorkoutCompleted(!workoutCompleted);
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold">{`${loadRoutine.dayDefined} - ${loadRoutine.name}`}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          {loadRoutine?.routine?.length > 0 && (
            <IonCardContent>
              <IonGrid>
                <IonRow class="ion-justify-content-end">
                  <IonToggle
                    checked={workoutCompleted}
                    onIonChange={handleFinishWorkout}>
                    <IonLabel class="text-secondary">
                      Finalize seu treino
                    </IonLabel>
                  </IonToggle>
                </IonRow>
                <IonList lines="full">
                  {loadRoutine.routine.map((routine, rIndex) => (
                    <IonItem key={rIndex} style={{}}>
                      <IonCol>
                        <IonLabel class="text-header-semibold">
                          {routine.muscle}
                        </IonLabel>
                        <WorkoutDayComponent
                          exerciseList={routine.exercises}
                          exerciseId={(e: number) => getChekedExercise(e)}
                        />
                      </IonCol>
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
