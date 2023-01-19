import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './DownloadBrochure.module.scss';
import brochure from '../../images/brochureRiana.pdf';

const DownloadBrochure = () => (
  <div className={styles.section}>
    <div className={styles.section__arrowContainer}>
      <a href={brochure} download="Riana Brochure">
        <button type="button" className={styles.section__button}>
          DOWNLOAD E-BROCHURE
        </button>
      </a>
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

export default DownloadBrochure;
