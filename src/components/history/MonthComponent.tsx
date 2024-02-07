import { IonCol, IonItem, IonLabel, IonRow } from '@ionic/react';
import { IDayAccessType } from '../../interfaces';
import * as moment from 'moment-timezone';

const MonthComponent: React.FC<{ month: IDayAccessType[] }> = (props) => {
  const { month } = props;

  return (
    <>
      {month.map((type, indexType) => (
        <IonItem key={indexType}>
          <IonLabel>
            <IonRow class="ion-justify-content-between">
              <IonCol>
                <p
                  style={{
                    marginBottom: 8,
                  }}>
                  Item: {type.type}
                </p>
                <p>Duração: 2h:30min</p>
              </IonCol>
              <IonCol>
                <IonRow class="ion-justify-content-end">
                  <p
                    style={{
                      width: '4rem',
                      marginBottom: 8,
                    }}>
                    Entrada:
                  </p>
                  <p>{moment(type.getIn).format('DD-MM-yyyy')}</p>
                </IonRow>
                <IonRow class="ion-justify-content-end">
                  <p
                    style={{
                      width: '4rem',
                    }}>
                    Saída:
                  </p>
                  <p>{moment(type.getOut).format('DD-MM-yyyy')}</p>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>
      ))}
    </>
  );
};

export default MonthComponent;
