import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
} from '@ionic/react';
import { useState } from 'react';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { eyeOutline, lockClosedOutline } from 'ionicons/icons';

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const selector: TypedUseSelectorHook<RootState> = useSelector;

  const user = selector((state) => state.user.data);

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

  const handlerUpdatePassword = () => {
    if (user.password !== oldPassword) return;

    if (password === rePassword) console.log(password);

    //submitted password
    setOldPassword('');
    setPassword('');
    setRePassword('');
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonCol>
            <form>
              <IonInput
                className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                type="text"
                fill="solid"
                label="Senha atual"
                labelPlacement="floating"
                errorText="Invalid email"
                onIonInput={(event) => {
                  validate(event);
                  setOldPassword(event.target.value);
                }}
                onIonBlur={() => markTouched()}></IonInput>
              <IonInput
                className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                type="password"
                fill="solid"
                label="Nova senha"
                labelPlacement="floating"
                errorText="Invalid email"
                onIonInput={(event) => {
                  validate(event);
                  setPassword(event.target.value);
                }}
                onIonBlur={() => markTouched()}></IonInput>
              <IonInput
                className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                type="password"
                fill="solid"
                label="Repita senha"
                labelPlacement="floating"
                errorText="Invalid email"
                onIonInput={(event) => {
                  validate(event);
                  setRePassword(event.target.value);
                }}
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
            </form>
            <IonList>
              <IonItem>
                <IonInput
                  labelPlacement="stacked"
                  label="Email"
                  placeholder="email@domain.com">
                  <IonIcon
                    slot="start"
                    icon={lockClosedOutline}
                    aria-hidden="true"></IonIcon>
                  <IonButton fill="clear" slot="end" aria-label="Show/hide">
                    <IonIcon
                      slot="icon-only"
                      name={eyeOutline}
                      aria-hidden="true"></IonIcon>
                  </IonButton>
                </IonInput>
              </IonItem>
            </IonList>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChangePassword;
