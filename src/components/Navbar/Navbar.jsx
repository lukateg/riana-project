import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav>
    <h1 className={styles.nav__headline}>riana yacht</h1>
    <hr className={styles.horizontalLine} />
    <div className={styles.nav__links}>
      <div className={styles.nav__item}>
        <a href="home">home</a>
      </div>
      <div className={styles.nav__item}>
        <a href="gallery">gallery</a>
      </div>
      <div className={styles.nav__item}>
        <a href="stories">stories</a>
      </div>
      <div className={styles.nav__item}>
        <a href="offers">offers</a>
      </div>
      <div className={styles.nav__item}>
        <a href="contact">contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
