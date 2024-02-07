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
import { FilterCalssComponent } from '../../components';
import ListClassComponent from '../../components/listClass/ListClassComponent';
import { IClass } from '../../interfaces';
import { IGroupClass } from '../../interfaces/IGroupClass';
import { ClassesMock } from '../../mocks/GroupClassMock';
import { TeachersMock } from '../../mocks/TeachersMock';

interface ComponentProps {
  classes: IGroupClass[];
}

const ScheduleClass: React.FC<ComponentProps> = (props) => {
  // const classes = props.classes
  const classes = ClassesMock;
  const teachers = TeachersMock;
  const [presentAlert] = useIonAlert();
  const classesFilter: IClass[] = classes.filter((e) => ({
    id: e.id,
    name: e.name,
  }));

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
        { text: 'Sim', handler: () => console.log('sim') },
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
