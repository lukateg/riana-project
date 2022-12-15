import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.sectionWrapper}>
    <div className={styles.section}>
      <div className={styles.section__navigation}>
        <div className={styles.section__navigation__logo}>
          <h1>riana yach</h1>
        </div>
        <div className={styles.section__navigation__element}>
          <h2>ABOUT US</h2>
          <p>Covid-19</p>
          <p>About Riana Yacht</p>
          <p>Interactive Brochure</p>
        </div>
        <div className={styles.section__navigation__element}>
          <h2>NEWS AND AWARDS</h2>
          <p>Awards</p>
          <p>Newsletter Signup</p>
        </div>
        <div className={styles.section__navigation__element}>
          <h2>TERMS & CONDITIONS</h2>
          <p>Privacy Policy</p>
          <p>Website Terms</p>
          <p>Sitemap</p>
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
            <i className="fa-brands fa-linkedin">{/* linkedin */}</i>
          </div>

          <div className={styles.section__links__icons__wrapper}>
            <i className="fa-brands fa-facebook">{/* facebook */}</i>
          </div>
        </div>
        <div className={styles.section__links__rights}>
          <p>2022 © NIKI & NORA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;