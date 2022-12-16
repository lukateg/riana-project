import styles from './TextGallery.module.scss';

const TextGallery = ({ headline1, headline2, text }) => (
  <div className={styles.section}>
    <h1 className={styles.section__heading}>{headline1}</h1>
    <h2 className={styles.section__heading}>{headline2}</h2>
    {text}
  </div>
);

export default TextGallery;
