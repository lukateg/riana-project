import styles from './CountryComponent.module.scss';

const CountryComponent = ({ backgorund, image, heading, p1, p2, p3 }) => (
  <div
    className={
      backgorund ? `${styles.section} ${styles.grey}` : `${styles.section}`
    }
  >
    <img src={image} alt="" />
    <div>
      <h1>{heading}</h1>
      <div className={styles.section__text}>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
    </div>
  </div>
);

export default CountryComponent;
