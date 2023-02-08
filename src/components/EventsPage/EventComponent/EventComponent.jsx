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
          RIANA YACHT <br id={styles.mobile} /> EVENTS
        </h1>
        <p>
          There is a further double cabin adjacent to the wheel house which is
          ideal accommodation for nannies, security, staff or extra guests.
        </p>
        <p>
          All cabins are fitted with ensuite bathrooms.
          <br className={styles.mobile} /> <br />
        </p>
        <br id={styles.mobile} />
        <p>Maximum Capacity:</p>
        <p>Sailing (with dispensation) - 22 people</p>
        <p>Moored / Anchored - 80 people</p>
      </div>
    </div>
    <img src={leftImage} alt="" id={styles.mobileImage} />
  </>
);

export default EventComponent;
