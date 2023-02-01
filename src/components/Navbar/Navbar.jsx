import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.scss';
import logoBlack from '../../images/logoBlackSolid.png';
import logoWhite from '../../images/beliLogo.svg';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(true);
  const [black, setBlack] = useState(false);
  const { pathname } = useLocation();
  let previousState = false;

  useEffect(() => {
    setOpen(true);
    if (
      pathname === '/dining' ||
      pathname === '/lifestyle' ||
      pathname === '/events'
    ) {
      setBlack(true);
    }
    if (
      pathname !== '/dining' &&
      pathname !== '/lifestyle' &&
      pathname !== '/events'
    ) {
      setBlack(false);
    }
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
        navbar || !open ? `${styles.nav} ${styles.active}` : `${styles.nav}`
      }
      onMouseEnter={() => changeNavbarOnMouseEnter(navbar)}
      onMouseLeave={() => changeNavbarOnMouseLeave(navbar)}
    >
      <div className={styles.nav__bookNowButtonWrapper}>
        <button
          type="button"
          id={navbar || !open ? `${styles.buttonActive}` : ''}
        >
          book <span>now</span>
        </button>
      </div>
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
              navbar || black || !open
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
              navbar || !open || black
                ? `${styles.logoImage}`
                : `${styles.logoImage} ${styles.active}`
            }
          />
        </Link>
        <i
          className={open ? 'fas fa-bars fa-light' : 'fas fa-times'}
          onClick={changeIcon}
          role="presentation"
          id={navbar ? 'nav-icon-acitve' : 'nav-icon'}
        >
          {/* icon */}
        </i>
      </div>
      <hr
        className={
          (navbar || black) && open
            ? `${styles.hr} ${styles.active}`
            : `${styles.hr}`
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
              navbar || black
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
              navbar || black
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>

        <div className={styles.nav__item}>
          <Link
            className={
              navbar || black
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
              navbar || black
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar || black
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/lifestyle"
          >
            lifestyle
          </Link>
        </div>
        <div className={styles.nav__item}>
          <div
            className={
              navbar || black
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar || black
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/experiences"
          >
            experiences
          </Link>
        </div>
        <div className={styles.nav__item}>
          <div
            className={
              navbar || black
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar || black
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/dining"
          >
            dining
          </Link>
        </div>
        <div className={styles.nav__item}>
          <div
            className={
              navbar || black
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar || black
                ? `${styles.nav__item__element} ${styles.active}`
                : `${styles.nav__item__element}`
            }
            to="/events"
          >
            events
          </Link>
        </div>

        <div className={styles.nav__item}>
          <div
            className={
              navbar || black
                ? `${styles.dot} ${styles.active}`
                : `${styles.dot}`
            }
          >
            <i className="fa-sharp fa-solid fa-circle">{/* icon */}</i>
          </div>
        </div>
        <div className={styles.nav__item}>
          <Link
            className={
              navbar || black
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
          <a href="tel:+447 788 200 528">
            <i className="fa-solid fa-phone">{/* phone */}</i>
          </a>
          <Link to="/contact">
            <i className="fa-regular fa-envelope">{/* mail */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/gallery">gallery</Link>
          <Link to="/gallery">
            <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/lifestyle">lifestyle</Link>
          <Link to="/lifestyle">
            <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/experiences">experiences</Link>
          <Link to="/experiences">
            <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/dining">dining</Link>
          <Link to="/dining">
            <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/events">events</Link>
          <Link to="/events">
            <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
          </Link>
        </div>
        <div className={styles.nav__mobile__row}>
          <Link to="/contact">contact</Link>
          <Link to="/contact">
            <i className="fa-solid fa-chevron-right">{/* arrow */}</i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
