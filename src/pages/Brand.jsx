import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BrandBanner from "../components/BrandBanner";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Brand = () => {
  const banners = useLoaderData();

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <BrandBanner banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2"></div>
      <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2"></div>
    </div>
  );
};

export default Brand;
