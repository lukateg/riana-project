import HeroImage from '../HeroImage/HeroImage';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import image from '../../images/hero-exp.jpeg';
import image2 from '../../images/Riana Radomiri palazzo.jpg';
import styles from './ExperiencesPage.module.scss';
import CountryComponent from '../CountryComponent/CountryComponent';
import montegroImage from '../../images/montengro.jpg';
import croatiaImage from '../../images/Croatia.jpeg';
import greeceImage from '../../images/greece.jpg';
import italyImage from '../../images/Italy.jpg';
import Itinerary from '../Itinerary/Itinerary';
import it1 from '../../images/it1.jpg';
import it2 from '../../images/it2.jpg';
import it3 from '../../images/it3.jpg';
import Reservations from '../Reservations/Reservations';

const ExperiencesPage = () => (
  <>
    <HeroImage image={image} />
    <Breadcrumbs />
    <div className={styles.heading}>
      CRUISING THE ADRIATIC AND MEDITERRANEAN
    </div>

    <CountryComponent
      backgorund="yes"
      image={montegroImage}
      heading="MONTENEGRO"
      p1="Discover this tiny but unique country in the heart of Europe that is rich in nature and long in history, culture and heritage."
      p2="The Montenegrin coastline (from the Croatian to the Albanian border) abounds with stunning scenery, gastronomic delights, numerous anchorage and swimming spots and water access to the UNESCO World Heritage protected towns of Kotor, Budva, Bar and Ulcijn amongst other must visit locations including numerous mountains, lakes, forests and other towns and villages across the country."
      p3="Bespoke Montenegro land adventures and other services and experiences are offered in conjunction with our destination management partner Discover Montenegro, discovermontenegro.com."
    />

    <CountryComponent
      image={croatiaImage}
      heading="CROATIA"
      p1="Split, Dubrovnik & Kornati"
      p2="At the doorstep to Montenegro lays Dalmatia and the beginning of the immense Croatian coastline. With over 1000 islands and coastlines lined with ancient historical towns & sites, Croatia is arguably one of the best sailing destinations in the world."
      p3="Croatia’s islands are remarkably close together and offer protected sailing that limits the need for long open water crossings between locations."
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
      p1="Italy needs little introduction as a sailing destination, however, we have a few tricks up our sleeve when it comes to navigating the various Italian hotspots and adding a selection of stunning locations and expeditions to your itinerary. "
      p2="For our volcano cruise, for example, we can offer a pure Sicilian dinner experience with a visit from a renowned local chef, local wines and live acoustic background music as you dine at sunset drifting past the active Stromboli volcano as your backdrop."
      p3="Our bespoke volcano dining experience is offered in conjunction with our Sicilian destination partner Contessa Consulting, contessaconsulting.com at an extra cost."
    />
    <Reservations />
    <img src={image2} alt="" className={styles.image} />
    <div className={styles.itinerary}>
      <h1 className={styles.itinerary__heading}>SUGGESTED ITINERARY</h1>
      <div className={styles.itinerary__section}>
        <Itinerary
          number="1"
          image={it2}
          heading="DAY ONE"
          t1="• Sailing in the Boka Bay "
          t2="• Swim near Our Lady of the Rock"
          t3="• Visit to the Blue Cave"
          t4="• Sunset sail"
          t5="• Dinner in Perast"
          t6="• Overnight in Kotor"
        />
        <Itinerary
          number="2"
          image={it3}
          heading="DAY TWO"
          t1="• Sail to Budva "
          t2="• Tour of the Budva old town"
          t3="• Sail around Sveti Stefan"
          t4="• Dinner in Budva"
          t5="• Overnight in Budva"
        />
        <Itinerary
          number="3"
          image={it1}
          heading="DAY THREE"
          t1="• Sail to Ulcinj"
          t2="• Day at Ada Bojana, the longest sandy beach in Montenegro"
          t3="• Barbecue at the beach"
          t4="• Overnight in Ulcinj"
        />
      </div>
    </div>
    <DownloadBrochure />
  </>
);

export default ExperiencesPage;
