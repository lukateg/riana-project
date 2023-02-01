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
        Enjoy an unforgettable culinary experience presented via our exclusive
        partnership with Roberto’s Mare robertosmare.com <br /> <br />
      </p>
      <p className={styles.section__content__text}>
        Our onboard chef will deliver fresh, authentic local and international
        cuisine, including a variety of tailor-made and signature dishes paired
        with the perfect selection of wines, spirits & beverages. Join us on an
        opulent gastronomic journey and enjoy our bespoke artisanal approach to
        fine cuisine. <br /> <br />
      </p>

      <p className={styles.section__content__text} id={styles.mobile}>
        Special dietary requirements may be accommodated upon request.
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
