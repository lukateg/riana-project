import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Brochure.module.scss';

import image from '../../../images/portonovi.jpg';

const Brochure = () => (
  <div className={styles.section}>
    <img src={image} alt="hero" className={styles.section__brochureImage} />
    <div className={styles.section__buttonsContainer}>
      <button type="button" className={styles.section__button}>
        download e-brochure
      </button>
      <button
        type="button"
        className={styles.section__arrow}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  </div>
);

export default Brochure;