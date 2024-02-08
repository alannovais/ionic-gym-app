import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonPage,
  IonRow,
} from '@ionic/react';
import { useState } from 'react';

const ChangePassword: React.FC = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === '') return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  const handlerUpdatePassword = () => {};

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonCol>
            <IonInput
              className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
              type="password"
              fill="solid"
              label="Senha atual"
              labelPlacement="floating"
              errorText="Invalid email"
              onIonInput={(event) => validate(event)}
              onIonBlur={() => markTouched()}></IonInput>
            <IonInput
              className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
              type="password"
              fill="solid"
              label="Nova senha"
              labelPlacement="floating"
              errorText="Invalid email"
              onIonInput={(event) => validate(event)}
              onIonBlur={() => markTouched()}></IonInput>
            <IonInput
              className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
              type="password"
              fill="solid"
              label="Repita senha"
              labelPlacement="floating"
              errorText="Invalid email"
              onIonInput={(event) => validate(event)}
              onIonBlur={() => markTouched()}></IonInput>
            <IonRow class="ion-justify-content-center">
              <IonButton
                fill="clear"
                onClick={(e) => {
                  e.preventDefault();
                  handlerUpdatePassword();
                }}>
                Salvar
              </IonButton>
            </IonRow>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChangePassword;
