import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IonContent, IonGrid } from '@ionic/react';
import './index.css';

interface ComponentProps {
    heigthSlide: number;
    backgroundColor: string;
}

const AdvertisingsComponent: React.FC<ComponentProps> = (props) => {
    let { heigthSlide, backgroundColor } = props;
    heigthSlide = 200;
    backgroundColor = 'red';

    return (
        <IonGrid style={{
          padding: 15,
        }}>
            <Swiper
                autoplay={true}
                loop={true}
                style={{
                    height: heigthSlide,
                    backgroundColor, 
                    borderRadius: '0.5rem'
                }}>
                <SwiperSlide className="swiper-fixed-width-300">
                    Slide 1
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </IonGrid>
    );
};

export default AdvertisingsComponent;
