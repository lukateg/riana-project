import styles from './Footer.module.scss';
import image from '../../images/beliLogo.svg';

const Footer = () => (
  <div className={styles.sectionWrapper}>
    <div className={styles.section}>
      <div className={styles.section__navigation}>
        <div className={styles.section__navigation__logo}>
          <img src={image} alt="" />
        </div>
        <div
          className={styles.section__navigation__element}
          id={styles.aboutUs}
        >
          <h2>ABOUT US</h2>
          <p>About Riana Yacht</p>
          <p>Interactive Brochure</p>
          <p>Partners</p>
        </div>
        <div className={styles.section__navigation__element}>
          <h2>TERMS & CONDITIONS</h2>
          <p>Privacy Policy</p>
          <p>Website Terms</p>
        </div>
        <div className={styles.section__navigation__element}>
          <h2>CONTACT</h2>
          <p>Contact us</p>
        </div>
      </div>
      <div className={styles.section__links}>
        <div className={styles.section__links__icons}>
          <div className={styles.section__links__icons__wrapper}>
            <i className="fa-brands fa-youtube">{/* youtube */}</i>
          </div>
          <div className={styles.section__links__icons__wrapper}>
            <i className="fa-brands fa-instagram">{/* instagram */}</i>
          </div>
          <div className={styles.section__links__icons__wrapper}>
            <i className="fa-brands fa-facebook">{/* facebook */}</i>
          </div>
        </div>
        <div className={styles.section__links__rights}>
          <p>
            2022 © NIKI & NORA. <br className={styles.br} /> ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
