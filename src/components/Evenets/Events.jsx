import { Link } from 'react-router-dom';

import styles from './Events.module.scss';
import image from '../../images/8F9A1084.jpeg';

const Events = () => (
  <div className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__text}>
        <h1>
          WEDDINGS,
          <br className={styles.headingMobile} /> PARTIES & EVENTS
        </h1>
        <p>
          Riana Yacht provides a unique floating venue that will comfortably
          accommodate circa 80 people on its wide, open decks for a variety of
          events. Whether on board or in conjunction with one of our hotel or
          destination partners we offer a seamless transition from wedding to
          party to event including bespoke themes, decoration and music to suit
          the occasion.
          <br /> <br />
          <span id={styles.mobile}>
            Riana Yacht will bring any event to life and make those celebrations
            even more memorable.
          </span>
        </p>
      </div>
      <img src={image} alt="" className={styles.section__image} />
      <div className={styles.section__content__button}>
        <Link to="/gallery">
          <button type="button">EXPLORE</button>
        </Link>
      </div>
      <img src={image} alt="" className={styles.imageMobile} />
    </div>
  </div>
);

export default Events;
