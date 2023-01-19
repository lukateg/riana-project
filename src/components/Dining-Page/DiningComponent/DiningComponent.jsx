import styles from './DiningComponent.module.scss';
import image from '../../../images/Dinning-min.jpg';
import brochure from '../../../images/brochureRiana.pdf';

const DiningComponent = () => (
  <div className={styles.section}>
    <div className={styles.section__wrapper}>
      <div className={styles.section__content}>
        <div className={styles.section__content__heading}>
          <h1>dining</h1>
          <h1>fresh and diverse</h1>
        </div>
        <div className={styles.section__content__text}>
          <p>
            Your chef may prepare a variety of local or international dishes.
          </p>
          <p>
            Upon request, special dietary requirements may also be accommodated.
            Our chef has over 10+ years of experience across the culinary world.
          </p>
          <p>
            They are passionate about working with fresh produce and creating
            innovative dishes ensuring an unforgettable dining experience
            throughout your stay on the Riana.
          </p>
        </div>
        <div className={styles.section__content__images__mobile}>
          <img src={image} alt="dinningImage" className={styles.image} />
          <img src={image} alt="dinningImage" className={styles.image} />
        </div>

        <div className={styles.section__content__buttonWrapper}>
          <a href={brochure} download="Riana Brochure">
            <button type="button">
              <p>EXPLORE</p>
            </button>
          </a>
        </div>
      </div>
      <div className={styles.section__image}>
        <img src={image} alt="dinningImage" className={styles.image} />
        <img src={image} alt="dinningImage" className={styles.image} />
      </div>
    </div>
  </div>
);

export default DiningComponent;
