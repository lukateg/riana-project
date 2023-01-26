import styles from './Dinning.module.scss';
import brochure from '../../images/brochureRiana.pdf';

const Dinning = () => (
  <div className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__heading}>
        <h4>dining</h4>
        <h4>fresh and diverse</h4>
      </div>
      <p className={styles.section__content__text}>
        Your chef may prepare a variety of local or international dishes fresh
        from source.
      </p>
      <p className={styles.section__content__text}>
        Our chef has over 10+ years of experience across the culinary world.
        They are passionate about working with fresh produce and creating
        innovative dishes, ensuring an unforgettable dining experience
        throughout your stay.
      </p>

      <p className={styles.section__content__text} id={styles.mobile}>
        Upon request, special dietary requirements may also be accommodated.
      </p>

      <div className={styles.buttonWrapper}>
        <a href={brochure} download="Riana Brochure">
          <button type="button" className={styles.niki}>
            EXPLORE
          </button>
        </a>
      </div>
    </div>
    <div className={styles.section__image}>
      {/* <img src={image} alt="dinningImage" className={styles.image} /> */}
    </div>
  </div>
);

export default Dinning;
