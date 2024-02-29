import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonLabel,
} from '@ionic/react';
import React from 'react';
import {
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IPlan } from '../../interfaces';
import { useHistory } from 'react-router';

interface ComponentProps {
  weekDays: string[];
  plan: IPlan[];
}

export const SwipperWorkoutComponent: React.FC<ComponentProps> = (props) => {
  const { weekDays, plan } = props;
  const history = useHistory();

  return (
    <Swiper
      slidesPerView={3}
      effect={'coverflow'}
      spaceBetween={0}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      navigation={true}
      pagination={true}
      mousewheel={true}
      modules={[Navigation, Pagination, Mousewheel, EffectCoverflow]}
      direction={'vertical'}
      style={{ width: '80%', height: '100%' }}>
      {weekDays.map((day, index) => (
        <SwiperSlide key={index}>
          {plan.map(
            (work, wIndex) =>
              day === work.dayDefined && (
                <IonCard
                  key={wIndex}
                  style={{
                    width: '30rem',
                    height: '10rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/workout/routine/${work.id}`);
                  }}>
                  <IonCardHeader>
                    <IonLabel class="text-header-semibold">
                      {day} - {work.name}
                    </IonLabel>
                  </IonCardHeader>
                </IonCard>
              ),
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
