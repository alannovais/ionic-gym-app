import { IonCheckbox, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import { IClass, IExercise, IMuscleRoutine } from '../../interfaces';

interface ContainerProps {
  routine: IMuscleRoutine;
  exerciseId: Function;
}

const WorkoutDayComponent: React.FC<ContainerProps> = (props) => {
  const { routine, exerciseId } = props;

  const checkExercise = (id: number) => {
    exerciseId(id);
  };

  const generateSetupRoutine = (exercise: IExercise) => {
    let stringRoutine: string[] = [];
    exercise?.sets && stringRoutine.push(exercise?.sets?.toString());
    (exercise?.sets && exercise?.reps) && stringRoutine.push('x');
    exercise?.reps && stringRoutine.push(exercise?.reps?.toString());
    exercise?.weight && stringRoutine.push(exercise?.weight?.toString());
    exercise?.during && stringRoutine.push(exercise?.during?.toString());
    return stringRoutine;
  }

  return (
    <IonGrid>
      {routine.exercises.map((exercise: IExercise, eIndex: any) => (
        <IonRow key={eIndex} class="ion-justify-content-between ion-align-items-center">
          <IonCol size='6'>
            <p>{exercise?.name ? exercise.name : ''}</p>
          </IonCol>
          {/** define character limit for exercise */}
          <IonCol size='5' style={{ width: 80 }}>
            <IonRow class="ion-justify-content-between ion-align-items-center">
              {generateSetupRoutine(exercise).map((routine, index) => (
                <span key={index}>{routine}</span>
              ))}
              <IonCheckbox
                style={{ width: 20, height: 20 }}
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
