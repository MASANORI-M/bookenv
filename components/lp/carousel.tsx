// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])
import Image from 'next/image';

// Import Swiper styles


export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // initialSlide={initialSlide}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      navigation={{
        prevEl: '.button_prev',
        nextEl: '.button_next',
      }}
    >

      <SwiperSlide>
        <div className="h-96 text-center pt-10">
          <Image width="280%" height="280%" src="/1.jpg" alt=""></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 text-center pt-10">
          <Image width="280%" height="280%" src="/2.jpg" alt=""></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 text-center pt-10">
          <Image width="280%" height="280%" src="/3.jpg" alt=""></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};