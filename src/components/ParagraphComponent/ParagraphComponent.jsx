import styles from './ParagraphComponent.module.scss';

const ParagraphComponent = ({ heading, text, text2 }) => (
  <div className={styles.section}>
    <h1 className={styles.section__heading}>{heading}</h1>
    <div className={styles.section__text}>
      <p>{text}</p>
      <p>{text2}</p>
    </div>
  </div>
);

export default ParagraphComponent;
