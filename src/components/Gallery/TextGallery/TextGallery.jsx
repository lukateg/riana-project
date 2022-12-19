import styles from './TextGallery.module.scss';

const TextGallery = ({ headline1, headline2, text }) => (
  <div className={styles.section}>
    <h4 className={styles.section__heading1}>{headline1}</h4>
    <h4 className={styles.section__heading2}>{headline2}</h4>
    {text}
  </div>
);

export default TextGallery;
