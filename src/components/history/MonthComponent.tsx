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
          <IonRow style={{ width: '100%' }}>
            <IonCol>
              <IonRow class="ion-justify-content-between">
                <div>
                  <IonLabel class="text-header-semibold margin-bottom-8">
                    Item:
                  </IonLabel>
                </div>
                <div>
                  <IonLabel class="text-secondary" style={{}}>
                    {type.type}
                  </IonLabel>
                </div>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class="ion-justify-content-between">
                <div>
                  <IonLabel class="text-header-semibold margin-bottom-8">
                    Entrada:
                  </IonLabel>
                </div>
                <div>
                  <IonLabel class="text-secondary" style={{}}>
                    {moment(type.getIn).format('DD-MM-yyyy')}
                  </IonLabel>
                </div>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow style={{ width: '100%' }} class="ion-justify-content-between">
            <IonCol>
              <IonRow class="ion-justify-content-between">
                <div>
                  <IonLabel class="text-header-semibold margin-bottom-8">
                    Duração:
                  </IonLabel>
                </div>
                <div>
                  <IonLabel class="text-secondary" style={{}}>
                    2h:30min
                  </IonLabel>
                </div>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class="ion-justify-content-between">
                <div>
                  <IonLabel class="text-header-semibold margin-bottom-8">
                    Saida:
                  </IonLabel>
                </div>
                <div>
                  <IonLabel class="text-secondary" style={{}}>
                    {moment(type.getOut).format('DD-MM-yyyy')}
                  </IonLabel>
                </div>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonItem>
      ))}
    </>
  );
};

export default MonthComponent;
