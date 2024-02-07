import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const AdvertisingsComponent: React.FC<any> = () => {
    return (
        <Swiper autoplay={true} loop={true}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
    );
};

export default AdvertisingsComponent;
