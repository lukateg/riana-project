import { Link } from 'react-router-dom';
import styles from './Story.module.scss';

const Story = ({ image, heading, text }) => (
  <section className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__element}>
        <img
          src={image}
          alt="interiorImage"
          className={styles.section__content__element__image}
        />
        <h4 className={styles.section__content__element__heading}>{heading}</h4>
        <div className={styles.section__content__element__paragraph}>
          <p>{text}</p>
        </div>
        <Link to="/gallery#interior">
          <p className={styles.section__content__element__discoverMore}>
            READ A STORY
          </p>
        </Link>
      </div>
    </div>
  </section>
);

export default Story;
