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

const Carousel = ({ images }) => (
  <section>
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 7000,
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
        {images.map((image) => (
          <SwiperSlide key={image}>
            {
              <div
                className={`${styles.carousel__slide} ${styles['carousel__slide--first']} `}
                style={{
                  backgroundImage: `url(${image})`
                }}
              />
            }
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  </section>
);

export default Carousel;
