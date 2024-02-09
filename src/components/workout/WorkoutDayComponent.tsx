import { IonCheckbox, IonCol, IonGrid, IonRow } from '@ionic/react';
import { IExercise } from '../../interfaces';

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
      {exerciseList.map((exercise: IExercise, eIndex: any) => (
        <IonRow
          key={eIndex}
          class="ion-justify-content-between ion-align-items-center">
          <IonCol size="6">
            <p>{exercise?.name ? exercise.name : ''}</p>
          </IonCol>
          {/** define character limit for exercise */}
          <IonCol size="5" style={{ width: 80 }}>
            <IonRow class="ion-justify-content-between ion-align-items-center">
              {generateSetupRoutine(exercise).map((routine, index) => (
                <span key={index}>{routine}</span>
              ))}
              <IonCheckbox
                style={{ width: 20, height: 20 }}
                aria-label="check workout"
                checked={false}
                onClick={(e) => {
                  e.preventDefault();
                  checkExercise(exercise.id);
                }}></IonCheckbox>
            </IonRow>
          </IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default WorkoutDayComponent;
