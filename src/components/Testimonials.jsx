import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div className="max-w-8xl px-6 md:px-10 lg:px-16 py-10 md:py-12 lg:py-16 mx-auto text-center">
      <h3 className="uppercase text-lg dark:text-white">
        Real Stories, Real Glow
      </h3>
      <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl leading-tight dark:text-white ">
        Words from Our Glow Community
      </h1>
      <p className="max-w-[600px] mx-auto dark:text-white">
        Explore the experiences of our vibrant community. Hear what our
        customers have to say about their journey with Glow Lounge. Your beauty
        story begins here, among the voices that inspire confidence and
        radiance.
      </p>

      <div className="relative mt-12 lg:mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-4 px-8">
              <FaQuoteLeft className="mx-auto text-2xl text-[#FFC0CB]"></FaQuoteLeft>
              <p className="italic dark:text-white">
                Glow Lounge is a game-changer! I stumbled upon this beauty haven
                and couldn't be happier. The product range is phenomenal, and
                the quality is top-notch. I've never felt more confident in my
                skincare routine. Five stars for transforming my beauty regimen!
              </p>
              <div className="flex justify-center text-[#F0AD4E]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h5 className="text-lg uppercase dark:text-white">Sarah J.</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-4 px-8">
              <FaQuoteLeft className="mx-auto text-2xl text-[#FFC0CB]"></FaQuoteLeft>
              <p className="italic dark:text-white">
                Glow Lounge is my go-to for all things beauty. From their
                stunning makeup collection to their nourishing skincare
                products, every purchase feels like a treat. The customer
                service is exceptional too—I had a question, and they responded
                promptly. Highly recommend this beauty store!
              </p>
              <div className="flex justify-center text-[#F0AD4E]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <h5 className="text-lg uppercase dark:text-white">Alex M.</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-4 px-8">
              <FaQuoteLeft className="mx-auto text-2xl text-[#FFC0CB]"></FaQuoteLeft>
              <p className="italic dark:text-white">
                I'm in love with Glow Lounge! The products are not only gorgeous
                but also effective. The packaging is so luxurious, and it feels
                like I'm treating myself every time I use them. The website is
                easy to navigate, and the delivery was super fast. I'm a
                customer for life
              </p>
              <div className="flex justify-center text-[#F0AD4E]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h5 className="text-lg uppercase dark:text-white">Emily H.</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-4 px-8">
              <FaQuoteLeft className="mx-auto text-2xl text-[#FFC0CB]"></FaQuoteLeft>
              <p className="italic dark:text-white">
                Glow Lounge exceeded my expectations! The quality of their
                makeup is outstanding, and the colors are so vibrant. I'm also
                impressed with their commitment to cruelty-free products. The
                personalized recommendations on the website made it easy for me
                to find exactly what I needed. I'm hooked and already planning
                my next order!
              </p>
              <div className="flex justify-center text-[#F0AD4E]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <h5 className="text-lg uppercase dark:text-white">Taylor B.</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-4 px-8">
              <FaQuoteLeft className="mx-auto text-2xl text-[#FFC0CB]"></FaQuoteLeft>
              <p className="italic dark:text-white">
                Glow Lounge has become my beauty sanctuary. The variety of
                skincare and makeup options is impressive. I recently tried
                their new skincare line, and my skin has never felt better. The
                online shopping experience was smooth, and my products arrived
                beautifully packaged. A must-visit for any beauty enthusiast!
              </p>
              <div className="flex justify-center text-[#F0AD4E]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h5 className="text-lg uppercase dark:text-white">Jeke R.</h5>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2"></div>
        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Testimonials;
