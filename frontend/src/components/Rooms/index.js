import RoomItem from "../RoomItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const Rooms = () => {
  return (
    <Swiper
      style={{
        padding: "8px",
      }}
      spaceBetween={10}
      slidesPerView={4}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <RoomItem isUser={true} />
      </SwiperSlide>
      <SwiperSlide>
        <RoomItem />
      </SwiperSlide>
      <SwiperSlide>
        <RoomItem />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <RoomItem />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <RoomItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default Rooms;
