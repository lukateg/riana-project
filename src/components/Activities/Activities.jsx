import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Activities.module.scss';
import image1 from '../../images/Artboard15.png';
import image2 from '../../images/Artboard16.png';
import image3 from '../../images/Artboard17.png';
import image4 from '../../images/Artboard18.png';
import image5 from '../../images/Artboard19.png';
import image6 from '../../images/Artboard20.png';
import image7 from '../../images/Artboard21.png';

import brochure from '../../images/brochureRiana.pdf';
import image8 from '../../images/toys-gallery.jpg';

const images = [image1, image2, image5, image3, image4, image6, image7];

const Activities = () => (
  <div>
    <div className={styles.section}>
      <h1 className={styles.section__heading}>ACTIVITIES</h1>
      <p>
        A wide range of water sports and other equipment is available on board
        and the Riana Yacht crew is trained & available to guide and support
        guests in the use of our recreational equipment to ensure both a safe &
        fun experience.
      </p>
      <p>
        Diving experiences and a certified dive master is available upon request
        and with advance notice.
      </p>
      <h3>AMENITIES</h3>
      <div className={styles.section__images}>
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="slika"
            className={styles.section__image}
          />
        ))}
      </div>
    </div>
    <img src={image8} alt="riana" className={styles.section__hero} />
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

export default Activities;
