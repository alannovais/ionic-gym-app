import { formatDate } from '@/helpers/MomentParses';
import { IDayAccessType } from '@/interfaces';
import { IonCol, IonItem, IonLabel, IonRow } from '@ionic/react';


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
                    {formatDate(type.getIn)}
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
                    {formatDate(type.getOut)}
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
