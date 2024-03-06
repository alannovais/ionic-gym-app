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
  useIonToast,
} from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FilterClassComponent, ListClassComponent } from '../../components';
import { IClass } from '../../interfaces/IClass';
import { ClassesGroupService } from '../../services/ClassesGroupService';
import { TeacherService } from '../../services/TeacherService';
import { RootState } from '../../store';
import { AppDispatch } from '../../store/store';
import { ITeacher } from '../../interfaces';

interface ComponentProps {}

const ScheduleClass: React.FC<ComponentProps> = (props) => {
  const [presentAlert] = useIonAlert();
  const dispatch = useDispatch<AppDispatch>();
  const selector: TypedUseSelectorHook<RootState> = useSelector;

  const classes = selector((state) => state.groupClasses.data);
  const classesFilter = selector((state) => state.classes.data);
  const teachersFilter = selector((state) => state.teachers.data);
  const [clearFields, setClearFields] = useState<boolean>(false);
  const [filtering, setFiltering] = useState<{
    teacher: ITeacher;
    classObj: IClass;
  }>();
  const [present] = useIonToast();

  React.useEffect(() => {
    dispatch(ClassesGroupService.get());
    dispatch(ClassesGroupService.listClasses());
    dispatch(TeacherService.get());
  }, []);

  React.useEffect(() => {
    setClearFields(false);
    callFilterService();
  }, [clearFields, filtering]);

  const onHandleTeacherSelected = (teacher: ITeacher) => {
    setFiltering({
      teacher,
      classObj: filtering?.classObj?.id ? filtering?.classObj : ({} as IClass),
    });
  };

  const onHandleClassSelected = (classObj: IClass) => {
    setFiltering({
      teacher: filtering?.teacher?.id ? filtering?.teacher : ({} as ITeacher),
      classObj,
    });
  };

  const callFilterService = () => {
    console.log(filtering);
  };

  const clearFilters = () => {
    setClearFields(true);
    setFiltering(undefined);
  };

  const setupPresence = (data: IClass) => {
    presentAlert({
      header: 'Agendar aula',
      subHeader: `Confirmar sua presença na aula?`,
      message: `${data.name} - ${data.start_at} - ${data.end_at}`,
      buttons: [
        { text: 'Sim', handler: () => onClassPresence(data) },
        { text: 'Não', handler: () => undefined },
      ],
    });
  };

  const onClassPresence = (id: IClass) => {
    try {
      //open spinning 
      //call Api and remove the reservation
      present({
        message: `Aula reservada, até logo!`,
        duration: 5000,
        position: 'bottom',
        color: 'success',
      });
    } catch {
      present({
        message: `Algo aconteceu, por favor tente novamente!`,
        duration: 5000,
        position: 'bottom',
        color: 'danger',
      });
    } finally {
      //end spinning
    }
  };

  return (
    <IonPage>
      <IonContent scrollY>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold font-main-color">Agendar aula</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow class="ion-justify-content-around">
            <FilterClassComponent
              label={'Professores'}
              value={teachersFilter}
              clearFields={clearFields}
              selectedValue={onHandleTeacherSelected}
            />
            <FilterClassComponent
              label={'Aulas'}
              value={classesFilter}
              clearFields={clearFields}
              selectedValue={onHandleClassSelected}
            />
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
