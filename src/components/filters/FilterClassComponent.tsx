import { IClass, ITeacher } from '@/interfaces';
import { IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';

const compareWith = (o1: ITeacher | IClass, o2: ITeacher | IClass) => {
  if (!o1 || !o2) {
    return o1 === o2;
  }

  if (Array.isArray(o2)) {
    return o2.some((o) => o.id === o1.id);
  }

  // console.log(o1, o2);

  return o1.id === o2.id;
};
interface ParamsProps {
  label: string;
  value: ITeacher[] | IClass[];
  clearFields?: boolean;
  selectedValue?: Function;
}
export const FilterClassComponent: React.FC<ParamsProps> = (props) => {
  const { label, value, clearFields, selectedValue } = props;
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    console.log(clearFields);

    if (clearFields) setSelected(undefined);
  }, [clearFields]);

  const selectedFilter = (data: CustomEvent) => {
    setSelected(data.detail.value);
    selectedValue !== undefined && selectedValue(data.detail.value);
  };

  return (
    <div
      style={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '0.5rem',
      }}>
      <IonSelect
        className="custom-ion-select"
        style={{marginLeft: '1rem'}}
        placeholder={label}
        onIonChange={selectedFilter}
        value={selected}>
        {value.map((item) => (
          <IonSelectOption key={item.id} value={item}>
            {item.name}
          </IonSelectOption>
        ))}
      </IonSelect>
    </div>
  );
};
