import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.scss';
import logoBlack from '../../images/logoBlack.png';
import logoWhite from '../../images/beliLogo.svg';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  let previousState = false;

  useEffect(() => {
    setOpen(true);
  }, [pathname]);

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

  const changeNavbarOnMouseEnter = (input) => {
    if (!input) {
      setNavbar(true);
    }
    previousState = input;
  };

  const changeNavbarOnMouseLeave = () => {
    setNavbar(previousState);
  };

  window.addEventListener('scroll', changeBackground);
  return (
    <nav
      className={
        navbar || !open
          ? `${styles.navbar} ${styles.active}`
          : `${styles.navbar}`
      }
      onMouseEnter={() => changeNavbarOnMouseEnter(navbar)}
      onMouseLeave={() => changeNavbarOnMouseLeave(navbar)}
    >
      <div
        className={
          navbar || !open
            ? `${styles.nav__headline} ${styles.active}`
            : `${styles.nav__headline}`
        }
      >
        <Link to="/">
          <img
            src={logoBlack}
            alt=""
            className={
              navbar || !open
                ? `${styles.logoImage} ${styles.active}`
                : `${styles.logoImage}`
            }
          />
        </Link>

        <Link to="/">
          <img
            src={logoWhite}
            alt=""
            className={
              navbar || !open
                ? `${styles.logoImage}`
                : `${styles.logoImage} ${styles.active}`
            }
          />
        </Link>

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
          <div
            className={
              navbar ? `${styles.dot} ${styles.active}` : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
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
          <div
            className={
              navbar ? `${styles.dot} ${styles.active}` : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>
        {/* <div className={styles.nav__item}>
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
        </div> */}
        {/* <div className={styles.nav__item}>
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
        </div> */}
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
          <a href="tel:+382 32 678 890">
            <i className="fa-solid fa-phone fa-lg">{/* phone */}</i>
          </a>
          <Link to="/contact">
            <i className="fa-regular fa-envelope fa-lg">{/* mail */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/gallery">gallery</Link>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>

        <div className={styles.nav__mobile__row}>
          <Link to="/contact">contact</Link>
          <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
