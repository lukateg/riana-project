import { Link } from 'react-router-dom';

import styles from './Interior-Exterior.module.scss';
import interiorImage from '../../images/interiorImage-min.jpg';
import exteriorImage from '../../images/flydeck-min.jpg';

const InteriorExterior = () => (
  <section className={styles.section}>
    <div className={styles.section__content}>
      <div className={styles.section__content__element}>
        <img
          src={interiorImage}
          alt="interiorImage"
          className={styles.section__content__element__image}
        />
        <h4 className={styles.section__content__element__heading}>INTERIOR</h4>
        <div className={styles.section__content__element__paragraph}>
          <p>
            Dining and entertainment areas include a lounge, bar and dining area
            for up to 10 people. Sleeping accommodation comprises 2 x Queen and
            2 x Twin cabins (with an extra sleep sofa in each twin cabin). A
            double cabin is adjacent to the wheelhouse, which is ideal for
            nannies, security, staff or additional guests. All cabins are fitted
            with ensuite bathrooms.
          </p>
          <br />
          <p id={styles.fuelConsuption}>
            Fuel consumption varies based on weather and sea conditions.
          </p>
        </div>
        <Link to="/gallery#interior">
          <p className={styles.section__content__element__discoverMore}>
            DISCOVER MORE
          </p>
        </Link>
      </div>
      <div className={styles.section__content__element}>
        <img
          src={exteriorImage}
          alt="exteriorImage"
          className={styles.section__content__element__image}
        />
        <h4 className={styles.section__content__element__heading}>EXTERIOR</h4>
        <p className={styles.section__content__element__paragraph}>
          With three extensive areas for sunbathing and entertaining, guests may
          relax on the flybridge, forward or aft decks. <br />
          <br />
          There are also two outdoor dining areas on the flybridge and aft decks
          which can be shaded during the day and open to the stars at night.
        </p>
        <Link to="/gallery#exterior">
          <p
            className={styles.section__content__element__discoverMore}
            id={styles.two}
          >
            DISCOVER MORE
          </p>
        </Link>
      </div>
    </div>
  </section>
);

export default InteriorExterior;
