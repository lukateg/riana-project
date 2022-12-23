import styles from './ClassicMotorSailingYacht.module.scss';

const ClassicMotorSailingYacht = () => (
  <div className={styles.section}>
    <h4 className={styles.section__heading}>CLASSIC MOTOR SAILING YACHT</h4>
    <a
      href="http://virtualtour.hr/riana/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <button type="button" className={styles.button}>
        EXPLORE 360 VIRTUAL TOUR
      </button>
    </a>
  </div>
);

export default ClassicMotorSailingYacht;
