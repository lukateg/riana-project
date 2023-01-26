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
            Riana Yacht is in the top 30% (by LOA) of all yachts in the world
            and arguably outperforms practically all others in its class & size
            with its combination of cruising speed vs. efficiency vs. economy
            vs. comfort and volume. Exuding quality, comfort, luxury, space and
            style, Riana Yacht’s design & naval architecture boasts the highest
            commercial technical and safety standards as well as being
            profoundly fuel efficient with a cruising range of circa 800
            nautical miles at a cruise of circa 10 knots at an outstanding fuel
            burn of circa 75 liters per hour inclusive of generators.
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
