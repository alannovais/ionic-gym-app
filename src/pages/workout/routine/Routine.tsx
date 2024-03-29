import { WorkoutDayComponent } from '@/components';
import { WorkoutService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from '@ionic/react';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import './Routine.scss';



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

  const handleFinishWorkout = () => {
    presentAlert({
      header: !workoutCompleted ? 'Concluir treino' : 'Reabrir treino',
      subHeader: workoutCompleted
        ? `Treino finalizado?`
        : 'Deseja regressar o treino?',
      message: `${loadRoutine.dayDefined} - ${loadRoutine.name}`,
      buttons: [
        {
          text: 'Sim',
          handler: () =>
            !workoutCompleted
              ? setWorkoutCompleted(true)
              : setWorkoutCompleted(false),
        },
        {
          text: 'Não',
          handler: () => setWorkoutCompleted(false),
        },
      ],
    });
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense" class="custom-header">
          <IonToolbar>
            <IonTitle class="text-header-semibold font-main-color">{`${loadRoutine.dayDefined} - ${loadRoutine.name}`}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          {loadRoutine?.routine?.length > 0 && (
            <IonCardContent>
              <IonGrid>
                <IonRow class="ion-justify-content-end">
                  <IonButton
                    fill="clear"
                    onClick={handleFinishWorkout}
                    className={`toggle-button ${workoutCompleted ? 'on' : 'off'}`}>
                    {workoutCompleted ? 'ON' : 'OFF'}
                  </IonButton>
                </IonRow>

                {loadRoutine.routine.map((routine, rIndex) => (
                  <div key={rIndex}>
                    <IonCol>
                      <IonLabel class="text-header-semibold">
                        {routine.muscle}
                      </IonLabel>
                      <WorkoutDayComponent
                        exerciseList={routine.exercises}
                        exerciseId={(e: number) => getChekedExercise(e)}
                      />
                    </IonCol>
                  </div>
                ))}
              </IonGrid>
            </IonCardContent>
          )}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Routine;
