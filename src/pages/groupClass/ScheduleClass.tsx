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
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FilterCalssComponent } from '../../components';
import ListClassComponent from '../../components/listClass/ListClassComponent';
import { IClass } from '../../interfaces/IClass';
import { ClassesGroupService } from '../../services/ClassesGroupService';
import { TeacherService } from '../../services/TeacherService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';

interface ComponentProps {}

const ScheduleClass: React.FC<ComponentProps> = (props) => {
  const [presentAlert] = useIonAlert();
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;

  const classes = selector((state) => state.groupClasses.data);
  const classesFilter = selector((state) => state.classes.data);
  const teachersFilter = selector((state) => state.teachers.data);

  React.useEffect(() => {
    dispatch(ClassesGroupService.get());
    dispatch(ClassesGroupService.listClasses());
    dispatch(TeacherService.get());
  }, []);

  const classPresence = (id: number) => {
    console.log(id);
    //Todo dispatch the event
  };

  const clearFilters = () => {
    //Todo Clear the filters
  };

  const setupPresence = (data: IClass) => {
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
            <FilterCalssComponent
              label={'Professores'}
              value={teachersFilter}
            />
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
