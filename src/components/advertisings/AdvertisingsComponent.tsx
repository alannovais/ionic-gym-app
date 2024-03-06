import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { IonCol, IonGrid, IonImg, IonLabel, IonRow } from '@ionic/react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import teste from '../../pages/group-class/teste.jpg';
import './index.scss';

interface ComponentProps {
  heigthSlide: number;
  backgroundColor: string;
}

const AdvertisingsComponent: React.FC<ComponentProps> = (props) => {
  const { heigthSlide, backgroundColor } = props;

  return (
    <IonGrid>
      <IonRow style={{ padding: '1rem', fontSize: '1.3rem' }}>
        <IonCol>
          <IonLabel class='text-card-title font-main-color'>Destaques</IonLabel>
        </IonCol>
        {/* <IonCol> <IonLabel> {`>`} </IonLabel> </IonCol> */}
      </IonRow>
      <IonRow
        style={{
          padding: '0.5rem',
        }}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          modules={[Navigation, Pagination, Mousewheel, Autoplay]}
          style={{
            height: heigthSlide,
            borderRadius: '0.5rem',
          }}>
          {Array.from({ length: 10 }).map((item, index) => (
            <SwiperSlide className="swiper-fixed-width-300">
              <IonImg 
                src={teste}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonRow>
    </IonGrid>
  );
};

export default AdvertisingsComponent;
