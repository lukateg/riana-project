import { useLocation, Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.section}>
      <Link to="/">
        <h1>Riana Yacht</h1>
      </Link>
      <i className="fa-solid fa-angle-right">{/* Right Arrow */}</i>{' '}
      <h1>{pathname.substring(1)}</h1>
    </div>
  );
};

export default Breadcrumbs;
