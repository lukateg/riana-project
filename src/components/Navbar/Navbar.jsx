import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeIcon = () => {
    setOpen(!open);
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <nav
      className={
        navbar || !open
          ? `${styles.navbar} ${styles.active}`
          : `${styles.navbar}`
      }
    >
      <div
        className={
          navbar || !open
            ? `${styles.nav__headline} ${styles.active}`
            : `${styles.nav__headline}`
        }
      >
        <h1>riana yacht</h1>
        <i
          className={open ? 'fas fa-bars icon-3x' : 'fas fa-times'}
          onClick={changeIcon}
          role="presentation"
          id={navbar ? 'nav-icon-acitve' : 'nav-icon'}
        >
          {/* icon */}
        </i>
      </div>
      <hr
        className={
          navbar && open ? `${styles.hr} ${styles.active}` : `${styles.hr}`
        }
      />
      <div
        className={
          navbar
            ? `${styles.nav__links} ${styles.active}`
            : `${styles.nav__links}`
        }
      >
        <div className={styles.nav__item}>
          <Link
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/"
          >
            home
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/gallery"
          >
            gallery
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/stories"
          >
            stories
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/offers"
          >
            offers
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/contact"
          >
            contact
          </Link>
        </div>
      </div>
      <div
        className={
          !open
            ? `${styles.nav__mobile} ${styles.active}`
            : `${styles.nav__mobile}`
        }
      >
        <div className={styles.nav__mobile__row__contact}>
          <i className="fa-solid fa-phone">{/* phone */}</i>
          <i className="fa-regular fa-envelope">{/* mail */}</i>
        </div>
        <div className={styles.nav__mobile__row}>
          <a href="newsletter signup">newsletter signup</a>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
        <div className={styles.nav__mobile__row}>
          <a href="gallery">gallery</a>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
        <div className={styles.nav__mobile__row}>
          <a href="stories">stories</a>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
        <div className={styles.nav__mobile__row}>
          <a href="offers">offers</a>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
        <div className={styles.nav__mobile__row}>
          <a href="events">events</a>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
        <div className={styles.nav__mobile__row}>
          <a href="contact">contact</a>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
