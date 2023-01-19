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
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
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
