import styles from './Dinning.module.scss';
import image from '../../images/Dinning.jpg';

const Dinning = () => (
  <div className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__heading}>
        <h1>dining</h1>
        <h2>fresh and diverse</h2>
      </div>
      <p className={styles.section__content__text}>
        Your chef may prepare a variety of local or international dishes. Upon
        request, special dietary requirements may also be accommodated. Our chef
        has over 10+ years of experience across the culinary world. They are
        passionate about working with fresh produce and creating innovative
        dishes ensuring an unforgettable dining experience throughout your stay
        on the Riana.
      </p>
      <div>
        <button type="button" className={styles.niki}>
          EXPLORE
        </button>
      </div>
    </div>
    <div className={styles.section__image}>
      {/* <img src={image} alt="dinningImage" className={styles.image} /> */}
    </div>
    <img src={image} alt="dinningImage" className={styles.image} />
  </div>
);

export default Dinning;
