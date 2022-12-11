/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/css/lazy';

import { Pagination, Autoplay, Navigation, Lazy } from 'swiper';
import styles from './Carousel.module.scss';
// import { Navigation } from 'swiper';

const Carousel = () => (
  <Swiper
    slidesPerView={2}
    spaceBetween={160}
    autoplay={{
      delay: 150000,
      disableOnInteraction: false
    }}
    loop
    pagination={{
      clickable: true
    }}
    speed={1500}
    navigation
    lazy={true}
    modules={[Autoplay, Pagination, Navigation, Lazy]}
    className={styles.carousel}
  >
    <div className={styles.carousel__wrapper}>
      <SwiperSlide>
        {({ isNext }) => (
          <div
            className={`${styles.carousel__slide} ${
              styles['carousel__slide--first']
            } ${
              !isNext
                ? styles['carousel__slide--active']
                : styles['carousel__slide--not-active']
            }`}
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isNext }) => (
          <div
            className={`${styles.carousel__slide} ${
              styles['carousel__slide--second']
            } ${
              !isNext
                ? styles['carousel__slide--active']
                : styles['carousel__slide--not-active']
            }`}
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isNext }) => (
          <div
            className={`${styles.carousel__slide} ${
              styles['carousel__slide--third']
            } ${
              !isNext
                ? styles['carousel__slide--active']
                : styles['carousel__slide--not-active']
            }`}
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isNext }) => (
          <div
            className={`${styles.carousel__slide} ${
              styles['carousel__slide--fourth']
            } ${
              !isNext
                ? styles['carousel__slide--active']
                : styles['carousel__slide--not-active']
            }`}
          />
        )}
      </SwiperSlide>
    </div>
  </Swiper>
);

export default Carousel;
