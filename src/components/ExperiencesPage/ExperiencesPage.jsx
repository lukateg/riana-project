import HeroImage from '../HeroImage/HeroImage';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import image from '../../images/Durmitor.jpg';
import image2 from '../../images/Riana Radomiri palazzo.jpg';
import styles from './ExperiencesPage.module.scss';
import CountryComponent from '../CountryComponent/CountryComponent';
// import montegroImage from '../../images/';
import croatiaImage from '../../images/Croatia.jpeg';
import greeceImage from '../../images/greece.jpg';
import italyImage from '../../images/Italy.jpg';

const ExperiencesPage = () => (
  <>
    <HeroImage image={image} />
    <Breadcrumbs />
    <div className={styles.heading}>
      CRUISING THE ADRIATIC AND MEDITERRANEAN
    </div>

    <CountryComponent
      backgorund="yes"
      image={croatiaImage}
      heading="MONTENEGRO"
      p1="Discover this tiny but unique country in the heart of Europe that is rich in nature and long in history, culture and heritage."
      p2="The Montenegrin coastline (from the Croatian to the Albanian border) abounds with stunning scenery, gastronomic delights, numerous anchorage and swimming spots and water access to the UNESCO World Heritage protected towns of Kotor, Budva, Bar and Ulcijn amongst other must visit locations including numerous mountains, lakes, forests and other towns and villages across the country."
      p3="*Bespoke Montenegro land adventures and other services and experiences are offered in conjunction with our destination management partner discovermontenegro.com at an extra cost."
    />

    <CountryComponent
      image={croatiaImage}
      heading="CROATIA"
      p1="Split, Dubrovnik & Kornati"
      p2="At the doorstep to Montenegro lays Dalmatia and the beginning of the immense Croatian coastline. With over 1000 islands and coastlines lined with ancient historical towns & sites, Croatia is arguably one of the best sailing destinations in the world."
      p3=" Croatia’s islands are remarkably close together and offer protected sailing that limits the need for long open water crossings between locations."
    />
    <CountryComponent
      backgorund="yes"
      image={greeceImage}
      heading="GREECE"
      p1="Athens, Kos, Paros & Mykonos"
      p2="Greece abounds with ancient history, clear, clean water, breathtaking islands, uncountable swimming and anchorage locations that all make for a perfect sailing vacation filled with unforgettable memories."
      p3="For pure relaxation or partying at the world-famous hotspots such as Nammos, Matsuhisa and Scorpios guests pick the destination and preferences and Riana Yacht will take you there."
    />
    <CountryComponent
      image={italyImage}
      heading="ITALY"
      p1="Italy Needs Little Introduction As A Sailing Destination, However, We Have A Few Tricks Up Our Sleeve When It Comes To Navigating The Various Italian Hotspots And Adding A Selection Of Stunning Locations And Expeditions To Your Itinerary."
      p2="What About Our Volcano Cruise For Example. We Can Offer A Pure Sicilian Dinner Experience With A Visit From A Renowned Local Chef, Local Wines And Live Acoustic Background Music As You Dine At Sunset Drifting Past The Active Stromboli Volcano As Your Backdrop."
      p3="* Our Bespoke Volcano Dinning Experience Is Offered In Conjunction With Our Sicilian Destination Partner Contessa Consulting Contessaconsulting.Com At An Extra Cost."
    />
    <img src={image2} alt="" className={styles.image} />
    <DownloadBrochure />
  </>
);

export default ExperiencesPage;
