import styles from './LifestylePage.module.scss';
import HeroImage from '../HeroImage/HeroImage';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Story from '../Story/Story';
import image from '../../images/lifestyle.jpg';
import story1 from '../../images/story1.jpg';
import story2 from '../../images/story2.jpg';
import story3 from '../../images/story3.jpg';
import story4 from '../../images/IMG_9943.jpeg';

const LifestylePage = () => (
  <>
    <HeroImage image={image} />
    <Breadcrumbs />
    <div className={styles.stories}>
      <h1>riana stories</h1>
      <div className={styles.stories__row}>
        <div id={styles.story}>
          <Story
            image={story2}
            heading="STORY 1"
            text={
              <>
                Dining and entertainment areas includes a lounge, bar and
                dinning area for up to 10 pax. Sleeping accommodation comprises
                2 x Queen and 2 x Twin cabins (with an extra sleep sofa in each
                twin cabin). <br /> There is a further double cabin adjacent to
                the wheel house which is ideal accommodation for nannies,
                security, staff or extra guests. All cabins are fitted with
                ensuite bathrooms.
              </>
            }
            id={styles.story}
          />
        </div>
        <div id={styles.story}>
          <Story
            image={story3}
            heading="STORY 2"
            text={
              <>
                With three extensive areas for sunbathing and entertaining,
                guests may relax on the flybridge, forward or aft decks. <br />
                There are also two outdoor dining areas on the flybridge and aft
                decks which can be shaded during the day and open to the stars
                at night.
              </>
            }
            id={styles.story}
          />
        </div>
      </div>
      <div className={styles.stories__row}>
        <div id={styles.story}>
          <Story
            image={story1}
            heading="STORY 3"
            id={styles.story}
            text={
              <>
                Dining and entertainment areas includes a lounge, bar and
                dinning area for up to 10 pax. Sleeping accommodation comprises
                2 x Queen and 2 x Twin cabins (with an extra sleep sofa in each
                twin cabin). <br /> There is a further double cabin adjacent to
                the wheel house which is ideal accommodation for nannies,
                security, staff or extra guests. All cabins are fitted with
                ensuite bathrooms.
              </>
            }
          />
        </div>
        <div id={styles.story}>
          <Story
            image={story4}
            heading="STORY 4"
            text={
              <>
                Dining and entertainment areas includes a lounge, bar and
                dinning area for up to 10 pax. Sleeping accommodation comprises
                2 x Queen and 2 x Twin cabins (with an extra sleep sofa in each
                twin cabin). <br /> There is a further double cabin adjacent to
                the wheel house which is ideal accommodation for nannies,
                security, staff or extra guests. All cabins are fitted with
                ensuite bathrooms.
              </>
            }
          />
        </div>
      </div>
    </div>
    <DownloadBrochure />
  </>
);

export default LifestylePage;
