import styles from './Interior-Exterior.module.scss';
import interiorImage from '../../images/interiorImage.jpg';
import exteriorImage from '../../images/exteriorImage.jpg';

const InteriorExterior = () => (
  <section className={styles.section}>
    <div className={styles.section__elements}>
      <div className={styles.section__element}>
        <img src={interiorImage} alt="interiorImage" className={styles.image} />
        <h2 className={styles.section__element__heading}>INTERIOR</h2>
        <p className={styles.section__element__paragraph}>
          Dining and entertainment areas includes a lounge, bar and dinning area
          for up to 10 pax. Sleeping accommodation comprises 2 x Queen and 2 x
          Twin cabins (with an extra sleep sofa in each twin cabin). There is a
          further double cabin adjacent to the wheel house which is ideal
          accommodation for nannies, security, staff or extra guests. All cabins
          are fitted with ensuite bathrooms.
        </p>
        {/* <p>DISCOVER MORE</p> */}
      </div>
      <div className={styles.section__element}>
        <img src={exteriorImage} alt="exteriorImage" className={styles.image} />
        <h2 className={styles.section__element__heading}>EXTERIOR</h2>
        <p className={styles.section__element__paragraph}>
          With three extensive areas for sunbathing and entertaining, guests may
          relax on the flybridge, forward or aft decks. <br />
          <br />
          There are also two outdoor dining areas on the flybridge and aft decks
          which can be shaded during the day and open to the stars at night.
        </p>
        {/* <p>DISCOVER MORE</p> */}
      </div>
    </div>
    <div className={styles.section__discoverMore}>
      <p className={styles.section__discoverMore__item}>DISCOVER MORE</p>
      <p className={styles.section__discoverMore__item__right}>DISCOVER MORE</p>
    </div>
  </section>
);

export default InteriorExterior;
