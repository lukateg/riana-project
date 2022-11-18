/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/scss';
import 'swiper/scss/pagination';

import { Pagination, Navigation, Autoplay } from 'swiper';
import styles from './Carousel.module.scss';

const Carousel = () => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    autoplay={{
      delay: 15000,
      disableOnInteraction: false
    }}
    loop
    pagination={{
      clickable: true
    }}
    navigation
    modules={[Autoplay, Pagination, Navigation]}
    className={styles.carousel}
  >
    <SwiperSlide>
      <div
        className={`${styles.carousel__slide} ${styles['carousel__slide--first']}`}
      >
        <div className={styles.carousel__wrapper}>
          <div className={styles.carousel__content}>
            <h6>new accessories collection</h6>
            <h4>Spring Essentials</h4>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--mobile']}`}
            >
              shop now
            </Link>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--desktop']}`}
            >
              shop women &apos; s accessories
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className={`${styles.carousel__slide} ${styles['carousel__slide--second']}`}
      >
        <div className={styles.carousel__wrapper}>
          <div className={styles.carousel__content}>
            <h6>new accessories collection</h6>
            <h4>Spring Essentials</h4>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--mobile']}`}
            >
              shop now
            </Link>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--desktop']}`}
            >
              shop women &apos; s accessories
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className={`${styles.carousel__slide} ${styles['carousel__slide--third']}`}
      >
        <div className={styles.carousel__wrapper}>
          <div className={styles.carousel__content}>
            <h6>new accessories collection</h6>
            <h4>Spring Essentials</h4>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--mobile']}`}
            >
              shop now
            </Link>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--desktop']}`}
            >
              shop women &apos; s accessories
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div
        className={`${styles.carousel__slide} ${styles['carousel__slide--fourth']}`}
      >
        <div className={styles.carousel__wrapper}>
          <div className={styles.carousel__content}>
            <h6>new accessories collection</h6>
            <h4>Spring Essentials</h4>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--mobile']}`}
            >
              shop now
            </Link>
            <Link
              to="/women/accesories"
              className={`${styles.carousel__button} ${styles['carousel__button--desktop']}`}
            >
              shop women &apos; s accessories
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
);

export default Carousel;
