import styles from './HeroImage.module.scss';

const HeroImage = ({ heading, heading2, text, image }) => (
  <div className={styles.wrap}>
    <img src={image} alt="hero" className={styles.heroImage} />
    <div className={styles.text}>
      <h2>{heading}</h2>
      <h2>{heading2}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default HeroImage;
