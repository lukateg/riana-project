import styles from './Itinerary.module.scss';

const Itinerary = ({ number, image, heading, t1, t2, t3, t4, t5, t6 }) => (
  <section className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__element}>
        <div className={styles.section__content__element__number}>{number}</div>
        <img
          src={image}
          alt="interiorImage"
          className={styles.section__content__element__image}
        />
        <h4 className={styles.section__content__element__heading}>
          {heading} <span>RECOMMENDATIONS</span>
        </h4>
        <div className={styles.section__content__element__paragraph}>
          <p>{t1}</p>
          <p>{t2}</p>
          <p>{t3}</p>
          <p>{t4}</p>
          <p>{t5}</p>
          <p>{t6}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Itinerary;
