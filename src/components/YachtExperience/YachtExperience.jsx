import styles from './YachtExperience.module.scss';
import image from '../../images/2016-07-23 16.38.55.jpg';

const YachtExperience = () => (
  <div className={styles.section}>
    <h1 className={styles.section__heading}>
      THE ULTIMATE MOTOR SAILING YACHT EXPERIENCE
    </h1>
    <section className={styles.section__content}>
      <img src={image} className={styles.section__image} alt="yacht" />
      <div className={styles.section__text_container}>
        <span>
          <h3>ABOUT</h3>
          <p>
            Launched in 2009 and fully refitted in 2022, Riana is a custom built
            42 meter, 220 ton, luxury sailing yacht with the elegance & grace of
            the traditional sailing yachts of yesteryear but with all the modern
            amenities one may expect.
          </p>
        </span>
        <span>
          <h3>FUEL EFFICIENCY = SUSTAINABILITY</h3>
          <p>
            Riana Yacht is in the top 30% (by LOA) of all yachts in the world
            and arguably outperforms practically all others in its class & size
            with its combination of cruising speed vs efficiency vs economy vs
            comfort and volume.
          </p>
          <p>
            Exuding quality, comfort, luxury, space and style, Riana Yacht’s
            design & naval architecture boasts the highest commercial technical
            and safety standards as well as being profoundly fuel efficient with
            a cruising range of circa 800 nautical miles at a cruise of circa 10
            knots at an outstanding fuel burn of circa 75 liters per hour
            inclusive of generators.
          </p>
          <p>
            *note: Fuel consumption varies based on weather and sea conditions.
          </p>
        </span>
      </div>
    </section>
  </div>
);

export default YachtExperience;
