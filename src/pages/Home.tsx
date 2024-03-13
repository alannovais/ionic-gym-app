import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import '@ionic/react/css/ionic-swiper.css';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import 'swiper/css';

import './Home.scss';



import { AdvertisingsComponent, ProfileComponent, UpComingClassesComponent } from '@/components';
import { ClassesGroupService, CompanyService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';


const Home: React.FC = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const user = selector((state) => state.user.data);
  const company = selector((state) => state.company.data);
  const booked = selector((state) => state.bookedClasses.data);

  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(ClassesGroupService.booked(user.id));
    user.company && dispatch(CompanyService.get(user.company));
    console.log(user, company);
  }, [user, company]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle class="text-card-title font-main-color">
              Company name
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileComponent />
        <AdvertisingsComponent heigthSlide={200} backgroundColor={'red'} />
        <UpComingClassesComponent classes={booked} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
