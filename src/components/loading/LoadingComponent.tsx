import { IonLoading } from '@ionic/react';
import React from 'react';

interface ComponentProp {
  loading: boolean;
}
export const LoadingComponent: React.FC<ComponentProp> = (props) => {
  const { loading } = props;
  return (
    <IonLoading
      isOpen={loading}
      spinner={'circles'}
      cssClass={'loading-setup'}></IonLoading>
  );
};
