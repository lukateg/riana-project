import styles from './EventsPage.module.scss';
import HeroImage from '../HeroImage/HeroImage';
import Events from '../Evenets/Events';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import hero from '../../images/blackAndWhite.JPG';
import image from '../../images/event.jpg';
import EventComponent from './EventComponent/EventComponent';

const EventsPage = () => (
  <>
    <div className={styles.color}>
      <HeroImage
        image={hero}
        heading="CELEBRATIONS &"
        heading2="EVENTS"
        text="Create everlasting moments with perfectly curated events on Riana Yacht."
      />
    </div>

    <Breadcrumbs />
    <h1 className={styles.heading}>RIANA EVENTS</h1>
    <EventComponent />
    <Events />
    <img src={image} alt="" className={styles.image} />
    <DownloadBrochure />
  </>
);

export default EventsPage;
