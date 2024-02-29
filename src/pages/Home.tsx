import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import '@ionic/react/css/ionic-swiper.css';
import { cartOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'swiper/css';
import { UpComingClassesComponent } from '../components';
import AdvertisingsComponent from '../components/advertisings/AdvertisingsComponent';
import { ClassesGroupService } from '../services';
import { RootState } from '../store';
import { AppDispatch } from '../store/store';
import '../theme/variables.scss';
import './Home.scss';

const Home: React.FC = () => {
  const history = useHistory();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const user = selector((state) => state.user.data);
  const booked = selector((state) => state.bookedClasses.data);

  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(ClassesGroupService.booked(user.id));
    console.log(user, booked);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              onClick={(e) => {
                e.preventDefault();
                history.push('/shopping');
              }}>
              <IonIcon icon={cartOutline} />
            </IonButton>
          </IonButtons>

          <IonButtons slot="end">
            <IonButton
              onClick={(e) => {
                e.preventDefault();
                history.push('/profile');
              }}>
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-header-semibold">Company name</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AdvertisingsComponent heigthSlide={200} backgroundColor={'red'} />
        <UpComingClassesComponent classes={booked} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
