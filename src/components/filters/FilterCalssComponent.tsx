import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import { IClass, ITeacher } from '../../interfaces';

const compareWith = (o1: ITeacher | IClass, o2: ITeacher | IClass) => {
  if (!o1 || !o2) {
    return o1 === o2;
  }

  if (Array.isArray(o2)) {
    return o2.some((o) => o.id === o1.id);
  }

  console.log(o1, o2);

  return o1.id === o2.id;
};
interface ParamsProps {
  label: string;
  value: ITeacher[] | IClass[];
}
export const FilterCalssComponent: React.FC<ParamsProps> = (props) => {
  const { label, value } = props;

  return (
    <IonList>
      <IonItem>
        <IonSelect
          aria-label="Food"
          label={label}
          compareWith={compareWith}
          onIonChange={(ev) =>
            console.log('Current value:', JSON.stringify(ev.detail.value))
          }>
          {value.map((item) => (
            <IonSelectOption key={item.id} value={item}>
              {item.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
    </IonList>
  );
};
