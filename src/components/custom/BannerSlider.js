import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Slider from "./BannerSlider/Slider";

SwiperCore.use([Autoplay]);

const BannerSlider = () => {
  return (
    <div>
          <Swiper
              slidesPerView={1}
              autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
              }}
              effect={"fade"}
              modules={[EffectFade, Navigation, Pagination]}
          >
              <SwiperSlide>
                <Slider />
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default BannerSlider;