import styles from './EventsPage.module.scss';
import HeroImage from '../HeroImage/HeroImage';
import Events from '../Evenets/Events';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import hero from '../../images/blackAndWhite.JPG';
import image from '../../images/IMG_9949.jpeg';
import EventComponent from './EventComponent/EventComponent';

const EventsPage = () => (
  <>
    <div className={styles.color}>
      <HeroImage
        image={hero}
        heading={
          <div style={{ color: 'white' }}>
            CELEBRATIONS & <br />
            EVENTS
          </div>
        }
        text={
          <div style={{ color: 'white' }}>
            Create everlasting moments with perfectly <br /> curated events on
            Riana Yacht.
          </div>
        }
      />
    </div>
    <Breadcrumbs />
    <h1 className={styles.heading}>RIANA EVENTS</h1>
    <EventComponent />
    <Events eventsPage="eventsPage" />
    <img src={image} alt="" className={styles.image} />
    <DownloadBrochure />
  </>
);

export default EventsPage;
