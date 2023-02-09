import styles from './EventComponent.module.scss';
import leftImage from '../../../images/IMG_9213-min.jpg';
import rightImage from '../../../images/events-crno-bela.jpeg';

const EventComponent = () => (
  <>
    <div className={styles.section}>
      <img src={leftImage} alt="" id={styles.leftImage} />
      <img src={rightImage} alt="" id={styles.rightImage} />
      <div className={styles.section__text}>
        <h1>
          LUXURY ELEGANCE <br id={styles.mobile} /> GRACE
        </h1>
        <p>
          Let us provide the perfect venue and help you create unforgettable
          moments & memories for family, friends and guests. <br /> <br />
        </p>
        <p>Celebrate your next event in a unique style on Riana Yacht</p>
      </div>
    </div>
    <img src={leftImage} alt="" id={styles.mobileImage} />
  </>
);

export default EventComponent;
