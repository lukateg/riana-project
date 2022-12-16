import image from '../../images/HeroImage.jpg';
import styles from './HeroImage.module.scss';

const HeroImage = ({ text }) => (
  <div>
    <img src={image} alt="hero" className={styles.heroImage} />
    <p className={styles.text}>{text}</p>
  </div>
);

export default HeroImage;
