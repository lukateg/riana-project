import styles from './UltimateYachtExperience.module.scss';
import image from '../../images/2.jpg';

const UltimateYachtExperience = () => (
  <>
    <h2 id={styles.mainHeading}>THE ULTIMATE MOTOR SAILING YACHT EXPERIENCE</h2>
    <section className={styles.section}>
      <img src={image} alt="Ultimate Yacht Experience" />
      <div className={styles.section__content}>
        <div className={styles.section__content__text}>
          <div className={styles.section__content__text__content}>
            <h2>ABOUT</h2>
            <p>
              Launched in 2009 and fully refitted in 2022, Riana is a
              custom-built 42-meter, 220-ton luxury sailing yacht with the
              elegance & grace of the traditional sailing yachts of yesteryear
              but with all the modern amenities one may expect.
            </p>
            <h2>FUEL EFFICIENCY = SUSTAINABILITY</h2>
            <p>
              Riana Yacht is in the top 30% (by LOA) of all yachts in the world
              and arguably outperforms practically all others in its class &
              size with its combination of cruising speed vs. efficiency vs.
              economy vs. comfort and volume. Exuding quality, comfort, luxury,
              space and style, Riana Yacht’s design & naval architecture boasts
              the highest commercial technical and safety standards as well as
              being profoundly fuel efficient with a cruising range of circa 800
              nautical miles at a cruise of circa 10 knots at an outstanding
              fuel burn of circa 75 liters per hour inclusive of generators.
            </p>
            <p>Fuel consumption varies based on weather and sea conditions.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default UltimateYachtExperience;
