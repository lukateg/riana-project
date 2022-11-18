import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles['loader-container']}>
    <div className={styles.loader} />
  </div>
);

export default Loader;
