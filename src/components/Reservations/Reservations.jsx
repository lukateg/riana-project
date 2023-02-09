import { Link } from 'react-router-dom';

import styles from './Reservations.module.scss';

const Reservations = () => (
  <div className={styles.section}>
    <h1>RESERVATIONS</h1>
    <p>
      info@rianayacht.com | <a href="tel:+447 788 200 528">+447 788 200 528</a>
    </p>
    <Link to="/contact">
      <button type="button">
        book <span>now</span>
      </button>
    </Link>
  </div>
);

export default Reservations;
