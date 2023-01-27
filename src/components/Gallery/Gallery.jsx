import { useEffect } from 'react';

import TextGallery from './TextGallery/TextGallery';
import Carousel from '../Carousel/Carousel';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import firstImage from '../../images/_D811900-min.jpg';
import secondImage from '../../images/_D8E9214-min.jpg';
import thirdImage from '../../images/IMG_6812-min.JPG';
import fourthImage from '../../images/_D811726-min.jpg';

import HeroImage from '../HeroImage/HeroImage';
import HeroImageForGaller from '../../images/GalleryHero-min.jpg';
import styles from './Gallery.module.scss';

import firstImage2 from '../../images/_D812016-min.jpg';
import secondImage2 from '../../images/_D812026-min.jpg';
import thirdImage2 from '../../images/interiorImage-min.jpg';

import hero1 from '../../images/PNRianofromabove-0832.jpg';
import hero2 from '../../images/portonovi.jpg';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    if (window.location.href.lastIndexOf('#') > 0) {
      document.getElementById(href)?.scrollIntoView();
    }
  });
  return (
    <>
      <HeroImage
        text1={<>DESIGN</>}
        text2={<>CLASSIC YET MODERN</>}
        image={HeroImageForGaller}
      />
      <Breadcrumbs />
      <TextGallery
        headline1="DESIGN"
        headline2="CLASSIC YET MODERN"
        text="Living, dining and guest cabins are luxuriously fitted and furnished
        with high ceilings. Outdoor areas have expansive open decks with
        shaded areas for an optimum experience of the nature and oceanic
        surroundings that abound en-route, at anchor or at port."
      />
      <img src={hero1} alt="" className={styles.image} />
      <TextGallery
        headline1="EXTERIOR"
        headline2="SPACE AND COMFORT"
        text="With three extensive areas for sunbathing and entertaining, guests
              may relax on the flybridge, forward or aft decks.
              There are also two outdoor dining areas on the flybridge and aft
              decks which can be shaded during the day and open to the stars at
              night."
      />
      <Carousel images={[firstImage, secondImage, thirdImage, fourthImage]} />
      <img src={hero2} alt="" className={styles.image} />
      <TextGallery
        headline1="INTERIOR"
        headline2="BESPOKE AND TIMELESS"
        text="Dining and entertainment areas includes a lounge, bar and dining
        area for up to 10 people. Sleeping accommodation comprises 2 x Queen
        and 2 x Twin cabins (with an extra sleep sofa in each twin cabin).
        There is a further double cabin adjacent to the wheel house which is
        ideal accommodation for nannies, security, staff or extra guests.
        All cabins are fitted with ensuite bathrooms."
      />
      <Carousel images={[firstImage2, secondImage2, thirdImage2]} />
      <DownloadBrochure />
    </>
  );
};

export default Gallery;
