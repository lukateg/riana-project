import image from '../../images/HeroImage.jpg';
import styles from './HeroImage.module.scss';

const HeroImage = () => (
  <div>
    <img src={image} alt="hero" className={styles.heroImage} />
  </div>
);

export default HeroImage;
