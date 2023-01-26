import { Link } from 'react-router-dom';

import styles from './Design.module.scss';

const Design = () => (
  <div className={styles.section}>
    <div className={styles.section__content}>
      <span>
        <h3>DESIGN</h3>
        <h3>CLASSIC YET MODERN</h3>
      </span>
      <p>
        Living, dining and guest cabins are luxuriously fitted and furnished
        with high ceilings. Outdoor areas have expansive open decks with shaded
        areas for an optimum experience of the nature and oceanic surroundings
        that abound en-route, at anchor or at port.
      </p>
      <Link to="/gallery">
        <button type="button">EXPLORE</button>
      </Link>
    </div>
  </div>
);

export default Design;
