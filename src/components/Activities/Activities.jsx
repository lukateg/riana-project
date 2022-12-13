import styles from './Activities.module.scss';
import image1 from '../../images/Artboard15.png';
import image2 from '../../images/Artboard16.png';
import image3 from '../../images/Artboard17.png';
import image4 from '../../images/Artboard18.png';
import image5 from '../../images/Artboard19.png';
import image6 from '../../images/Artboard20.png';
import image7 from '../../images/Artboard21.png';

const images = [image1, image2, image5, image3, image4, image6, image7];

const Design = () => (
  <div className={styles.section}>
    <h1 className={styles.section__heading}>ACTIVITIES</h1>
    <p>
      A wide range of water sports and other equipment is available on board and
      the Riana Yacht crew is trained & available to guide and support guests in
      the use of our recreational equipment to ensure both a safe & fun
      experience.
    </p>
    <p>
      *Diving experiences and a certified dive master is available upon request
      and with advance notice.
    </p>
    <h3>AMMENITIES</h3>
    <div className={styles.section__images}>
      {images.map((image) => (
        <img src={image} alt="slika" className={styles.section__image} />
      ))}
    </div>
    <button type="button">DOWNLOAD E-BROCHURE</button>
  </div>
);

export default Design;