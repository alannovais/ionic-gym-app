import { IonImg, IonItem, IonLabel, IonList, IonNote } from '@ionic/react';
import { IGroupClass } from '../../interfaces';
import groupImage from '../../pages/groupClass/teste.jpg';

interface ComponentProps {
  classes: IGroupClass[];
  setupPresence: Function;
}

const ListClassComponent: React.FC<ComponentProps> = (props) => {
  const { classes, setupPresence } = props;

  const onOpneModal = (value: IGroupClass) => {
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
          {/* <div style={{ backgroundColor: 'red', height: 60, width: 60 }}>&nbsp;</div> */}
          <IonImg
            src={groupImage}
            style={{ width: '5rem', marginRight: '0.5rem' }}
            alt="Image about the class which you can choice"
          />
          <IonLabel>
            <h5>{classDay.name}</h5>
            <p>
              {classDay.teacher.map((teacher, indexT) => (
                <span key={indexT}>{teacher.name}</span>
              ))}
            </p>
            <p>{`${classDay.start_at} - ${classDay.end_at}`}</p>
          </IonLabel>
          <IonNote slot="end">
            <IonLabel>
              Vagas:
              {classDay.capacity}
            </IonLabel>
          </IonNote>
        </IonItem>
      ))}
    </IonList>
  );
};

export default ListClassComponent;
