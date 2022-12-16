import styles from './HeroImage.module.scss';

const HeroImage = ({ text, image }) => (
  <div>
    <img src={image} alt="hero" className={styles.heroImage} />
    <p className={styles.text}>{text}</p>
  </div>
);

export default HeroImage;
