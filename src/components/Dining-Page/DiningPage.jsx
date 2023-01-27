import HeroImage from '../HeroImage/HeroImage';
import ParagraphComponent from '../ParagraphComponent/ParagraphComponent';
import image from '../../images/deck-1.jpg';
import DiningComponent from './DiningComponent/DiningComponent';
import styles from './DiningPage.module.scss';
import diningTableImage from '../../images/_D811904-min.jpg';
import RobertosMare from './RobertosMare/RobertosMare';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';

const DiningPage = () => (
  <>
    <HeroImage image={image} />
    <Breadcrumbs />
    <ParagraphComponent
      heading="DINING AND FACILITIES"
      text="Living, dining and guest cabins are luxuriously fitted and furnished with high ceilings. Outdoor areas have expansive open decks with shaded areas for an optimum experience of the nature and oceanic surroundings that abound en-route, at anchor or at port."
    />
    <DiningComponent />
    <div className={styles.imageWrapper}>
      <img src={diningTableImage} alt="dining table" />
    </div>
    <RobertosMare />
    <DownloadBrochure />
  </>
);

export default DiningPage;
