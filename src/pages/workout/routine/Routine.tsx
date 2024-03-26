import { WorkoutDayComponent } from '@/components';
import { LoadingComponent } from '@/components/loading/LoadingComponent';
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
import Switch from 'react-switch';

const Routine: React.FC = () => {
  const route = useRouteMatch();
  const [workoutCompleted, setWorkoutCompleted] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [presentAlert] = useIonAlert();
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const loadRoutine = selector((state) => state.workouts.data);

  const loadData = async () => {
    if ('id' in route.params)
      await dispatch(WorkoutService.getWorkoutDay(route.params.id));
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
  }, [loading]);

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
        <LoadingComponent loading={loading} />
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
                  <Switch
                    onChange={handleFinishWorkout}
                    checked={workoutCompleted}
                  />
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
