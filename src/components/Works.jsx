import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import '../index.css';

function Works({ img1, img2, img3, text }) {
  return (
    <div data-aos="flip-left" className="w-full px-2 py-5 max-w-[26rem] object-cover flex flex-col gap-3 lg:hover:scale-105 duration-500 shadow-xl rounded-xl">
      <div className="">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          effect="fade"
        >
          <SwiperSlide>
            <img
              className="shadow-sm shadow-gray-800 rounded-xl min-w-60"
              src={img1}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="shadow-sm shadow-gray-800 rounded-xl"
              src={img2}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="shadow-sm shadow-gray-800 rounded-xl"
              src={img3}
              alt=""
            />
          </SwiperSlide>

        </Swiper>
      </div>
      <p className="text-white">{text}</p>
    </div>
  )
}

Works.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Works;