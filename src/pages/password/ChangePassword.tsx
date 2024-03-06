import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRippleEffect,
  IonRow,
} from '@ionic/react';
import { useState } from 'react';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { eye, eyeOutline, lockClosedOutline } from 'ionicons/icons';
import './ChangePassword.scss';

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [toggleOldPassword, setToggleOldPassword] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleRePassword, setToggleRePassword] = useState(false);

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
            <IonCard>
              <IonCardContent>
                <form>
                  <IonList lines="none">
                    <IonItem>
                      <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type={toggleOldPassword ? 'password' : 'text'}
                        labelPlacement="stacked"
                        label="Senha atual"
                        placeholder="Digite sua senha"
                        errorText="Invalid email"
                        onIonInput={(event) => {
                          validate(event);
                          setOldPassword(event.target.value);
                        }}
                        onIonBlur={() => markTouched()}>
                        <IonIcon
                          slot="start"
                          icon={lockClosedOutline}
                          aria-hidden="true"></IonIcon>
                        <IonButton
                          slot="end"
                          aria-label="Show/hide"
                          onClick={(e) => {
                            e.preventDefault();
                            setToggleOldPassword(!toggleOldPassword);
                          }}>
                          <IonIcon
                            slot="icon-only"
                            name={eye}
                            aria-hidden="true"></IonIcon>
                        </IonButton>
                      </IonInput>
                      <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type={togglePassword ? 'password' : 'text'}
                        labelPlacement="stacked"
                        label="Nova senha"
                        placeholder="Digite sua senha"
                        errorText="Invalid email"
                        onIonInput={(event) => {
                          validate(event);
                          setRePassword(event.target.value);
                        }}
                        onIonBlur={() => markTouched()}>
                        <IonIcon
                          slot="start"
                          icon={lockClosedOutline}
                          aria-hidden="true"></IonIcon>
                        <IonButton
                          slot="end"
                          aria-label="Show/hide"
                          onClick={(e) => {
                            e.preventDefault();
                            setTogglePassword(!togglePassword);
                          }}>
                          <IonIcon
                            slot="icon-only"
                            name={eyeOutline}
                            aria-hidden="true"></IonIcon>
                        </IonButton>
                      </IonInput>
                      <IonInput
                        className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`}
                        type={toggleRePassword ? 'password' : 'text'}
                        labelPlacement="stacked"
                        label="Repita a senha"
                        placeholder="Digite sua senha"
                        errorText="Invalid email"
                        onIonInput={(event) => {
                          validate(event);
                          setRePassword(event.target.value);
                        }}
                        onIonBlur={() => markTouched()}>
                        <IonIcon
                          slot="start"
                          icon={lockClosedOutline}
                          aria-hidden="true"></IonIcon>
                        <IonButton
                          slot="end"
                          aria-label="Show/hide"
                          onClick={(e) => {
                            e.preventDefault();
                            setToggleRePassword(!toggleRePassword);
                          }}>
                          <IonIcon
                            slot="icon-only"
                            name={eyeOutline}
                            aria-hidden="true"></IonIcon>
                        </IonButton>
                      </IonInput>
                    </IonItem>
                  </IonList>
                  <IonRow class="ion-justify-content-center">
                    <div
                      style={{
                        marginTop: '0.5rem',
                        minWidth: '80%',
                      }}
                      className="ion-activatable ripple-parent custom-parent"
                      onClick={(e) => {
                        e.preventDefault();
                        handlerUpdatePassword();
                      }}>
                      <IonLabel class="text-secondary">Salvar</IonLabel>
                      <IonRippleEffect></IonRippleEffect>
                    </div>
                  </IonRow>
                </form>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChangePassword;
