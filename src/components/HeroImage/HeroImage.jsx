import styles from './HeroImage.module.scss';

const HeroImage = ({ text1, text2, image }) => (
  <div className={styles.wrap}>
    <img src={image} alt="hero" className={styles.heroImage} />
    <div className={styles.text}>
      <h2>{text1}</h2>
      <h3>{text2}</h3>
    </div>
  </div>
);

export default HeroImage;
