import styles from './Interior-Exterior.module.scss';
import interiorImage from '../../images/interiorImage.jpg';
import exteriorImage from '../../images/flydeck.jpg';

const InteriorExterior = () => (
  <section className={styles.section}>
    <div className={styles.section__elements}>
      <div className={styles.section__element}>
        <img src={interiorImage} alt="interiorImage" className={styles.image} />
        <h4 className={styles.section__element__heading}>INTERIOR</h4>
        <p className={styles.section__element__paragraph}>
          Dining and entertainment areas includes a lounge, bar and dining area
          for up to 10 people. Sleeping accommodation comprises 2 x Queen and 2
          x Twin cabins (with an extra sleep sofa in each twin cabin). There is
          a further double cabin adjacent to the wheel house which is ideal
          accommodation for nannies, security, staff or extra guests. All cabins
          are fitted with ensuite bathrooms.
        </p>
        <div className={styles.discoverWrapper}>
          <p className={styles.discoverMore}>DISCOVER MORE</p>
        </div>
      </div>
      <div className={styles.section__element}>
        <img src={exteriorImage} alt="exteriorImage" className={styles.image} />
        <h4 className={styles.section__element__heading}>EXTERIOR</h4>
        <p className={styles.section__element__paragraph}>
          With three extensive areas for sunbathing and entertaining, guests may
          relax on the flybridge, forward or aft decks. <br />
          <br />
          There are also two outdoor dining areas on the flybridge and aft decks
          which can be shaded during the day and open to the stars at night.
        </p>
        <p className={styles.discoverMore}>DISCOVER MORE</p>
      </div>
    </div>
    {/* <div className={styles.section__discoverMore}>
      <h1 className={styles.section__discoverMore__item}>DISCOVER MORE</h1>
      <h1 className={styles.section__discoverMore__item__right}>
        DISCOVER MORE
      </h1>
    </div> */}
  </section>
);

export default InteriorExterior;
