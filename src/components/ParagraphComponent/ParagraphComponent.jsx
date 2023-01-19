import styles from './ParagraphComponent.module.scss';

const ParagraphComponent = ({ heading, text }) => (
  <div className={styles.section}>
    <h1 className={styles.section__heading}>{heading}</h1>
    <p className={styles.section__text}>{text}</p>
  </div>
);

export default ParagraphComponent;
