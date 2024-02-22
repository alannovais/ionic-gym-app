import { IonCheckbox, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import { IExercise } from '../../interfaces';
import '../../theme/variables.css';

interface ContainerProps {
  exerciseList: IExercise[];
  exerciseId: Function;
}

const WorkoutDayComponent: React.FC<ContainerProps> = (props) => {
  const { exerciseList, exerciseId } = props;

  const checkExercise = (id: number) => {
    exerciseId(id);
  };

  const generateSetupRoutine = (exercise: IExercise) => {
    let stringRoutine: string[] = [];
    exercise?.sets && stringRoutine.push(exercise?.sets?.toString());
    exercise?.sets && exercise?.reps && stringRoutine.push('x');
    exercise?.reps && stringRoutine.push(exercise?.reps?.toString());
    exercise?.weight && stringRoutine.push(exercise?.weight?.toString());
    exercise?.during && stringRoutine.push(exercise?.during?.toString());
    return stringRoutine;
  };

  return (
    <IonGrid>
      {exerciseList.map((exercise: IExercise, index: number) => (
        <IonRow
          key={index}
          class="ion-justify-content-between ion-align-items-center">
          <IonCol size="7">
            <IonLabel class="text-secondary">
              {exercise?.name ? exercise.name : ''}
            </IonLabel>
          </IonCol>
          {/** define character limit for exercise */}
          <IonCol size="4">
            <IonRow class="ion-justify-content-between ion-align-items-center">
              {generateSetupRoutine(exercise).map(
                (routine: string, index: number) => (
                  <IonLabel class="text-secondary" key={index}>
                    {routine}
                  </IonLabel>
                ),
              )}
            </IonRow>
          </IonCol>
          <IonCol size="1">
            <IonCheckbox
              aria-label="check workout"
              checked={false}
              onClick={(e) => {
                e.preventDefault();
                checkExercise(exercise.id);
              }}></IonCheckbox>
          </IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default WorkoutDayComponent;
