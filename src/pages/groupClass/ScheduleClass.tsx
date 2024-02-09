import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React from 'react';
import { FilterCalssComponent } from '../../components';
import ListClassComponent from '../../components/listClass/ListClassComponent';
import { IClass, ITeacher } from '../../interfaces';
import { IGroupClass } from '../../interfaces/IGroupClass';
import { ClassesGroupService } from '../../services/ClassesGroupService';
import { TeacherService } from '../../services/TeacherService';

interface ComponentProps {}

const ScheduleClass: React.FC<ComponentProps> = (props) => {
  const [classes, setClasses] = React.useState<IGroupClass[]>(
    [] as IGroupClass[],
  );

  const [teachers, setTeachers] = React.useState<ITeacher[]>([] as ITeacher[]);
  const [classesFilter, setClassesFilter] = React.useState<IClass[]>(
    [] as IClass[],
  );

  const [presentAlert] = useIonAlert();

  React.useEffect(() => {
    const loadData = async () => {
      setTeachers(await TeacherService.getTeachers());
      setClasses(await ClassesGroupService.getClasses());
      setClassesFilter(await ClassesGroupService.listClasses());
    };
    loadData();
  }, []);

  const classPresence = (id: number) => {
    console.log(id);
    //Todo dispatch the event
  };

  const clearFilters = () => {
    //Todo Clear the filters
  };

  const setupPresence = (data: IGroupClass) => {
    presentAlert({
      header: 'Agendamento da aula',
      subHeader: `Confirmar sua presença na aula?`,
      message: `${data.name} - ${data.start_at} - ${data.end_at}`,
      buttons: [
        { text: 'Sim', handler: () => classPresence(data.id) },
        { text: 'Não', handler: () => console.log('Não') },
      ],
    });
  };
  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Agendar aula</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow class="ion-justify-content-around">
            <FilterCalssComponent label={'Professores'} value={teachers} />
            <FilterCalssComponent label={'Aulas'} value={classesFilter} />
            <IonButton
              fill="clear"
              onClick={(e) => {
                e.preventDefault();
                clearFilters();
              }}>
              <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
          </IonRow>
          {/* <IonDatetime presentation="date-time" preferWheel={true}></IonDatetime> */}
          <ListClassComponent classes={classes} setupPresence={setupPresence} />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ScheduleClass;
