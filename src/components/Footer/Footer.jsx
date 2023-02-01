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
        <div className={styles.section__stayConnected}>
          {/* <h1>STAY CONNECTED</h1>
          <h2>SIGN UP TO OUR NEWSLETTER</h2>
          <button
            type="button"
            className={styles.section__stayConnected__button}
          >
            SIGN UP
          </button> */}
          <img src={image} alt="Riana Yacht" />
        </div>
        <div className={styles.section__navigation}>
          <div className={styles.section__navigation__logo}>
            <img src={image} alt="Riana Yacht" />
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
              <h2>ABOUT </h2>
            </Link>

            <Link
              to="/"
              onClick={() => {
                ifHome();
              }}
            >
              <p>About Us</p>
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
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className={styles.section__links}>
          <div className={styles.section__links__icons}>
            <a
              href="https://www.youtube.com/watch?v=Z5uyENAWEAA"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.section__links__icons__wrapper}>
                <i className="fa-brands fa-youtube">{/* youtube */}</i>
              </div>
            </a>
            <a
              href="https://instagram.com/rianayacht?igshid=MWI4MTIyMDE="
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.section__links__icons__wrapper}>
                <i className="fa-brands fa-instagram">{/* instagram */}</i>
              </div>
            </a>
            <div className={styles.section__links__icons__wrapper}>
              <i className="fa-brands fa-facebook">{/* facebook */}</i>
            </div>
          </div>
          <div className={styles.section__links__rights}>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
