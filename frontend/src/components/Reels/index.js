import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import ReelItem from "../ReelItem";

const Reels = () => {
  return (
    <Swiper
      style={{
        padding: "8px",
        marginTop:"8px",
        borderRadius:"10px"
      }}
      spaceBetween={10}
      slidesPerView={4}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
      <SwiperSlide>
        <ReelItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default Reels;
