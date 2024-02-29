import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import React from 'react';
import { IClass } from '../../interfaces';
import '../../theme/variables.scss';

interface ComponentProps {
  classes: IClass[];
}

export const UpComingClassesComponent: React.FC<ComponentProps> = (props) => {
  const { classes } = props;

  return (
    <>
      {classes !== undefined && (
        <IonGrid>
          <IonCard>
            <IonCardContent>
              <IonList>
                {classes.map((data, index) => (
                  <IonItem key={index} lines={index > 0 ? 'full' : 'none'}>
                    <IonLabel>
                      <IonLabel class="text-header-semibold" style={{}}>
                        {`${data.name} (${data.start_at} - ${data.end_at})`}
                      </IonLabel>
                      <IonLabel class="text-header-semibold" style={{}}>
                        {data.teacher.map((t, index) => (
                          <IonLabel key={index}>{t.name}</IonLabel>
                        ))}
                      </IonLabel>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonGrid>
      )}
    </>
  );
};
