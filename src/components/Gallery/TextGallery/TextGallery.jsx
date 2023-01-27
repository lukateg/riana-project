import styles from './TextGallery.module.scss';

const TextGallery = ({ headline1, headline2, text }) => (
  <div className={styles.section}>
    <h1>{headline1}</h1>
    <h1>{headline2}</h1>
    <p>{text}</p>
  </div>
);

export default TextGallery;
