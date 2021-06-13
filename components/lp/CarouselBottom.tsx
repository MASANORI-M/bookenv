import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])

// Import Swiper styles


export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
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
        <div className="h-96 text-center">
            <p className="font-bold text-4xl mt-14 tracking-widest leading-loose">
                SOLUTION 1
                <br />
                どのような人が評価したかがわかる
                <br />
                "自分に近しい人の評価が見れる"
            </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-96 text-center">
            <p className="font-bold text-4xl mt-14 tracking-widest leading-loose">
                SOLUTION 2
                <br />
                どのような人が評価したかがわかる
                <br />
                "自分に近しい人の評価が見れる"
            </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 text-center">
            <p className="font-bold text-4xl mt-14 tracking-widest leading-loose">
                SOLUTION 3
                <br />
                どのような人が評価したかがわかる
                <br />
                "自分に近しい人の評価が見れる"
            </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};