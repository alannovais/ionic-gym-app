import {
  AdvertisingsComponent,
  ProfileComponent,
  UpComingClassesComponent,
} from '@/components';
import { ClassesGroupService, CompanyService } from '@/services';
import { RootState } from '@/store';
import { AppDispatch } from '@/store/store';
import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import '@ionic/react/css/ionic-swiper.css';
import React, { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import './Home.scss';
import { LoadingComponent } from '@/components/loading/LoadingComponent';

const Home: React.FC = () => {
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const user = selector((state) => state.user.data);
  const booked = selector((state) => state.bookedClasses.data);
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    await dispatch(ClassesGroupService.booked(user.id));
    user.company && (await dispatch(CompanyService.get(user.company)));
    setLoading(false);
  };

  React.useEffect(() => {
    loadData();
  }, [loading]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <LoadingComponent loading={loading} />
        <IonHeader collapse="condense">
          <IonToolbar class='custom-header'>
            <IonTitle class="text-card-title">
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
