import styles from './Design.module.scss';

const Design = () => (
  <div className={styles.section}>
    <div className={styles.section__content}>
      <span>
        <h2>DESIGN</h2>
        <h3>DESIGN CLASSIC YET MODERN</h3>
      </span>
      <p>
        Living, dining and guest cabins are luxuriously fitted and furnished
        with high ceilings. Outdoor areas have expansive open decks with shaded
        areas for an optimum experience of the nature and oceanic surroundings
        that abound en-route, at anchor or at port.
      </p>
      <button type="button">EXPLORE</button>
    </div>
  </div>
);

export default Design;
