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
                     <IonCol>
                        <IonRow class="">
                           <IonLabel class="text-header-semibold margin-bottom-8">
                              Item:
                           </IonLabel>
                           <IonLabel
                              class="text-secondary"
                              style={{ marginLeft: '0.25rem' }}>
                              {type.type}
                           </IonLabel>
                        </IonRow>
                        <IonRow class="">
                           <IonLabel class="text-header-semibold">
                              Duração:
                           </IonLabel>
                           <IonLabel
                              class="text-secondary"
                              style={{ marginLeft: '0.25rem' }}>
                              2h:30min
                           </IonLabel>
                        </IonRow>
                     </IonCol>
                     <IonCol>
                        <IonRow class="ion-justify-content-between">
                           <IonLabel class="text-header-semibold margin-bottom-8">
                              Entrada:
                           </IonLabel>
                           <IonLabel class="text-secondary">
                              {moment(type.getIn).format('DD-MM-yyyy')}
                           </IonLabel>
                        </IonRow>
                        <IonRow class="ion-justify-content-between">
                           <IonLabel class="text-header-semibold">
                              Saída:
                           </IonLabel>
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
