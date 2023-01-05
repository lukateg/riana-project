import styles from './YachtStories.module.scss';
import brochure from '../../images/brochureRiana.pdf';
import firstImage from '../../images/IMG_9213-min.jpg';
import secondImage from '../../images/Left-Top-min.jpg';

const YachtStories = () => (
  <div className={styles.section}>
    <div className={styles.section__container}>
      <div className={styles.section__content}>
        <img
          src={firstImage}
          alt="slika"
          className={`${styles.section__image} ${styles['section__image--first']}`}
        />
      </div>
    </div>
    <div className={styles.section__container}>
      <div className={styles.section__content}>
        <img
          src={secondImage}
          alt="slika"
          className={`${styles.section__image} ${styles['section__image--second']}`}
        />
        <div className={styles.section__text}>
          <h4>RIANA YACHT STORIES</h4>
          <p>
            There is a further double cabin adjacent to the wheel house which is
            ideal accommodation for nannies, security, staff or extra guests.
            <br /> All cabins are fitted with ensuite bathrooms.
          </p>
          <a href={brochure} download="Riana Brochure">
            <button type="button">DISCOVER MORE</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default YachtStories;
