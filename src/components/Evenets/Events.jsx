import brochure from '../../images/brochureRiana.pdf';

import styles from './Events.module.scss';
import image from '../../images/8F9A1084-min.jpeg';

const Events = () => (
  <div className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__text}>
        <h1>
          WEDDINGS, <br id={styles.brMobile} /> PARTIES &{' '}
          <br id={styles.brMobile} /> EVENTS
        </h1>
        <p>
          Riana Yacht provides a unique floating venue that will comfortably
          accommodate approximately 80 people on its wide, open decks for a
          variety of events.
          <br /> <br id={styles.mobile} />
          Whether on board or in conjunction with one of our hotel or
          destination partners we offer a seamless transition from wedding to
          party to events including bespoke themes, decoration and music to suit
          the occasion.
          <br id={styles.mobile} /> <br id={styles.mobile} />
          <span id={styles.mobile}>
            Riana Yacht will bring any event to life and make those celebrations
            even more memorable. Riana Yacht will bring any event to life and
            make those celebrations even more memorable.
          </span>
        </p>
      </div>
      <img src={image} alt="" className={styles.section__image} />
      <div className={styles.section__content__buttonWrapper}>
        <a href={brochure} download="Riana Brochure">
          <button type="button">EXPLORE</button>
        </a>
      </div>
      <img src={image} alt="" className={styles.imageMobile} />
    </div>
  </div>
);

export default Events;
