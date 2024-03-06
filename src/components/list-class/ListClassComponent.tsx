import { IonImg, IonItem, IonLabel, IonList, IonNote } from '@ionic/react';
import { IClass } from '../../interfaces';
import groupImage from '../../pages/group-class/teste.jpg';

interface ComponentProps {
  classes: IClass[];
  setupPresence: Function;
}

export const ListClassComponent: React.FC<ComponentProps> = (props) => {
  const { classes, setupPresence } = props;

  const onOpneModal = (value: IClass) => {
    setupPresence(value);
  };

  return (
    <IonList inset={true}>
      {classes.map((classDay, index) => (
        <IonItem
          key={index}
          onClick={(e) => {
            e.preventDefault();
            onOpneModal(classDay);
          }}>
          <IonImg
            src={groupImage}
            style={{ width: '5rem', marginRight: '0.5rem' }}
            alt="Image about the class which you can choice"
          />
          <IonLabel>
            <IonLabel class="text-header-semibold">{classDay.name}</IonLabel>
            {classDay.teacher.map((teacher, indexT) => (
              <IonLabel key={indexT}>{teacher.name}</IonLabel>
            ))}
            <IonLabel>{`${classDay.start_at} - ${classDay.end_at}`}</IonLabel>
          </IonLabel>
          <IonNote slot="end">
            <IonLabel class='text-secondary font-main-color'>
              Vagas:
              {classDay.capacity}
            </IonLabel>
          </IonNote>
        </IonItem>
      ))}
    </IonList>
  );
};
