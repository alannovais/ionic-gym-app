import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { IonGrid } from '@ionic/react';
import {
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.scss';

interface ComponentProps {
  heigthSlide: number;
  backgroundColor: string;
}

const AdvertisingsComponent: React.FC<ComponentProps> = (props) => {
  const { heigthSlide, backgroundColor } = props;

  return (
    <IonGrid
      style={{
        padding: 15,
      }}>
      <Swiper
        autoplay={{
          delay: 2500,
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
          backgroundColor,
          borderRadius: '0.5rem',
        }}>
        <SwiperSlide className="swiper-fixed-width-300">Slide 1</SwiperSlide>
        <SwiperSlide>sadasd</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </IonGrid>
  );
};

export default AdvertisingsComponent;
