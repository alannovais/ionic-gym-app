import { IonCheckbox, IonGrid, IonRow } from '@ionic/react';
import { IExercise, IMuscleRoutine } from '../../interfaces';

interface ContainerProps {
  routine: IMuscleRoutine;
  exerciseId: Function;
}

const WorkoutDayComponent: React.FC<ContainerProps> = (props) => {
  const { routine, exerciseId } = props;

  const checkExercise = (id: number) => {
    exerciseId(id);
  };

  return (
    <IonGrid>
      {routine.exercises.map((exercise: IExercise, eIndex: any) => (
        <IonRow key={eIndex} class="ion-justify-content-between">
          <IonRow>
            <p style={{ width: 120 }}>{exercise?.name ? exercise.name : ''}</p>
          </IonRow>
          {/** define character limit for exercise */}
          <IonRow class="ion-justify-content-between" style={{ width: 80 }}>
            <p>{exercise?.sets ? exercise.sets : ''}</p>
            {exercise.sets && exercise.reps && <p> x </p>}
            <p>{exercise?.reps ? exercise.reps : ''}</p>
            <p>{exercise?.weight ? exercise.weight : ''}</p>
            <p>{exercise?.during ? exercise.during : ''}</p>
            <IonCheckbox
              value="test"
              onClick={(e) => {
                e.preventDefault();
                checkExercise(exercise.id);
              }}></IonCheckbox>
          </IonRow>
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default WorkoutDayComponent;
