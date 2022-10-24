import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg1 from '../../../assets/images/banner-1.png';
import questionImg from '../../../assets/images/question.png';
import technoloyImg from '../../../assets/images/technoloy.png';
import whatWeDoImg from '../../../assets/images/what-we-do.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Slider from "./Slider";

SwiperCore.use([Autoplay]);

const BannerSlider = () => {
  return (
    <div>
      <Swiper
          slidesPerView={1}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false,
          }}
        speed={1200}
          effect={"fade"}
          modules={[EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide>
          <Slider title="who we are" description="OS IT Solutions Ltd is one of the most prominent & dynamic ITes (IT-enabled Service)
                          companies in the ICT industry of Bangladesh." btn="get started" image={bannerImg1} />
        </SwiperSlide>
        
        <SwiperSlide>
          <Slider title="WHAT WE DO." description="Our team of dedicated experts develops creative, comprehensive, and sustainable software
                solutions to empower your organization." btn="get started" image={whatWeDoImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider title="WHY CHOOSE US ??" description="We Provide the highest quality of service to our valued customers to ensure maximum
                satisfaction. We have lots of work experience in implementing numerous projects, including
                software development" btn="get started" image={questionImg} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider title="LATEST TECHNOLOGY" description="Explore the latest technology with us. No matter what the size or type of industry, our solutions can be customized to fit your business needs." btn="get started" image={technoloyImg} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerSlider;