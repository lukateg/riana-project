import styles from './RianaYachtStories.module.scss';
import leftImage from '../../images/IMG_9213-min.jpg';
import rightImage from '../../images/helicopter.jpg';

const RianaYachtStories = () => (
  <div className={styles.section}>
    <img src={leftImage} alt="" id={styles.leftImage} />
    <img src={rightImage} alt="" id={styles.rightImage} />
    <div className={styles.section__text}>
      <h1>
        RIANA YACHT <br id={styles.mobile} /> STORIES
      </h1>
      <p>Inspiration to bring a little Riana magic into your own space.</p>
      <div className={styles.section__text__buttonWrapper}>
        <button type="button">discover more</button>
      </div>
    </div>
  </div>
);

export default RianaYachtStories;
