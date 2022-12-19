import { Link, useLocation } from 'react-router-dom';

import styles from './Footer.module.scss';
import image from '../../images/beliLogo.svg';
import brochure from '../../images/brochureRiana.pdf';

const Footer = () => {
  const { pathname } = useLocation();

  const ifHome = () => {
    if (pathname === '/') {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const ifContact = () => {
    if (pathname === '/contact') {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
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
            <Link
              to="/"
              onClick={() => {
                ifHome();
              }}
            >
              <h2>ABOUT US</h2>
            </Link>

            <Link
              to="/"
              onClick={() => {
                ifHome();
              }}
            >
              <p>About Riana Yacht</p>
            </Link>
            <a href={brochure} download="Riana Brochure">
              <p>Interactive Brochure</p>
            </a>
            <Link
              to="/contact"
              onClick={() => {
                ifContact();
              }}
            >
              <p>Partners</p>
            </Link>
          </div>
          <div className={styles.section__navigation__element}>
            <Link
              to="/contact"
              onClick={() => {
                ifContact();
              }}
            >
              <h2>TERMS & CONDITIONS</h2>
            </Link>

            <Link
              to="/contact"
              onClick={() => {
                ifContact();
              }}
            >
              <p>Privacy Policy</p>
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                ifContact();
              }}
            >
              <p>Website Terms</p>
            </Link>
          </div>
          <div className={styles.section__navigation__element}>
            <Link
              to="/contact"
              onClick={() => {
                ifContact();
              }}
            >
              <h2>CONTACT</h2>
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                ifContact();
              }}
            >
              <p>Contact us</p>
            </Link>
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
              2022 © N&N Design. <br className={styles.br} /> ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
