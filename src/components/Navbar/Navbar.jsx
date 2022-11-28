import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <nav
      className={
        navbar ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
      }
    >
      <h1
        className={
          navbar
            ? `${styles.nav__headline} ${styles.active}`
            : `${styles.nav__headline}`
        }
      >
        riana yacht
      </h1>
      <hr
        className={navbar ? `${styles.hr} ${styles.active}` : `${styles.hr}`}
      />
      <div
        className={
          navbar
            ? `${styles.nav__links} ${styles.active}`
            : `${styles.nav__links}`
        }
      >
        <div className={styles.nav__item}>
          <a
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            href="home"
          >
            home
          </a>
        </div>
        <div className={styles.nav__item}>
          <a
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            href="gallery"
          >
            gallery
          </a>
        </div>
        <div className={styles.nav__item}>
          <a
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            href="stories"
          >
            stories
          </a>
        </div>
        <div className={styles.nav__item}>
          <a
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            href="offers"
          >
            offers
          </a>
        </div>
        <div className={styles.nav__item}>
          <a
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            href="contact"
          >
            contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
