import { IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';
import * as moment from 'moment-timezone';
import { IDayAccessType } from '../../interfaces';
import '../../theme/variables.css';

const MonthComponent: React.FC<{ month: IDayAccessType[] }> = (props) => {
  const { month } = props;

  return (
    <>
      {month.map((type, indexType) => (
        <IonItem key={indexType}>
          <IonGrid>
            <IonRow class="margin-bottom-8">
              <IonCol size='6'>
                <IonRow class="ion-justify-content-between">
                  <IonCol>
                    <IonLabel class="text-header-semibold margin-bottom-8">
                      Item:
                    </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel
                      class="text-secondary"
                      style={{ marginLeft: '0.25rem' }}>
                      {type.type}
                    </IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonLabel class="text-header-semibold">Duração:</IonLabel>
                  <IonLabel
                    class="text-secondary"
                    style={{ marginLeft: '0.25rem' }}>
                    2h:30min
                  </IonLabel>
                </IonRow>
              </IonCol>
              <IonCol size='6'>
                <IonRow class="ion-justify-content-evenly">
                  <IonCol>
                    <IonLabel class="text-header-semibold margin-bottom-8">
                      Entrada:
                    </IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel class="text-secondary">
                      {moment(type.getIn).format('DD-MM-yyyy')}
                    </IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonLabel class="text-header-semibold">Saída:</IonLabel>
                  <IonLabel class="text-secondary">
                    {moment(type.getOut).format('DD-MM-yyyy')}
                  </IonLabel>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      ))}
    </>
  );
};

export default MonthComponent;
