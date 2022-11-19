import CreateStory from "../CreateStory";
import StoryItem from "../StoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

const Stories = () => {
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
        <CreateStory />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <StoryItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default Stories;
