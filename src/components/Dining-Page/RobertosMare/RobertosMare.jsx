import styles from './RobertosMare.module.scss';
import robertosMareImage from '../../../images/robertosmare.jpg';
import robertosMareLogo from '../../../images/logo-mare.png';

const RobertosMare = () => (
  <section className={styles.section}>
    <img src={robertosMareImage} alt="Roberto's Mare" />
    <div className={styles.section__content}>
      <img src={robertosMareLogo} alt="Robertos Mare" id={styles.logo} />
      <div className={styles.section__content__text}>
        <div className={styles.section__content__text__heading}>
          <h2>DINING ON BOARD WITH</h2>
          <h2>ROBERTO’S MARE</h2>
        </div>
        <div className={styles.section__content__text__body}>
          <p>
            Enjoy an unforgettable culinary experience presented via our
            exclusive partnership with Roberto’s Mare’ robertosmare.com
          </p>
          <p>
            Our on board chef will deliver fresh, authentic local and
            international cuisine including a variety of tailor-made and
            signature dishes paired with the perfect selection of wines, spirits
            & beverages.
          </p>
          <p>
            Join us on an opulent gastronomic journey and enjoy our bespoke
            artisanal approach to fine cuisine.
          </p>
          <p>*Special dietary requirements may be accommodated upon request.</p>
          <img
            src={robertosMareImage}
            alt="Roberto's Mare"
            id={styles.imageMobile}
          />
        </div>
      </div>
    </div>
  </section>
);

export default RobertosMare;
