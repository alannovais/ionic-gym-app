import { FilterClassComponent, ListClassComponent } from '@/components';
import { LoadingComponent } from '@/components/loading/LoadingComponent';
import { IClass, ITeacher } from '@/interfaces';
import { ClassesGroupService, TeacherService } from '@/services';
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
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    await dispatch(ClassesGroupService.get());
    await dispatch(ClassesGroupService.listClasses());
    await dispatch(TeacherService.get());
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
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
        <LoadingComponent loading={loading} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold">Aulas de hoje</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid style={{ marginBottom: '3vh' }}>
          <section id='filters' style={{marginBottom: '1rem', position: 'relative', left: '-1rem'}}>
            <IonRow
              class="ion-justify-content-center ion-align-items-center"
              style={{ width: '100vw' }}>
              <IonCol size="5">
                <FilterClassComponent
                  label={'Professores'}
                  value={teachersFilter}
                  clearFields={clearFields}
                  selectedValue={onHandleTeacherSelected}
                />
              </IonCol>
              <IonCol size="5">
                <FilterClassComponent
                  label={'Aulas'}
                  value={classesFilter}
                  clearFields={clearFields}
                  selectedValue={onHandleClassSelected}
                />
              </IonCol>
              <IonCol size="1">
                <IonButton
                  fill="clear"
                  onClick={(e) => {
                    e.preventDefault();
                    clearFilters();
                  }}>
                  <IonIcon icon={closeOutline}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </section>
          <IonCard style={{ width: '98%', margin: '0 auto' }}>
            <IonCardContent>
              <ListClassComponent
                classes={classes}
                setupPresence={setupPresence}
              />
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ScheduleClass;
