import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import TextGallery from './TextGallery/TextGallery';
import Carousel from '../Carousel/Carousel';
import firstImage from '../../images/_D811900-min.jpg';
import secondImage from '../../images/_D8E9214-min.jpg';
import thirdImage from '../../images/IMG_6812-min.JPG';
import fourthImage from '../../images/_D811726-min.jpg';

import HeroImage from '../HeroImage/HeroImage';
import HeroImageForGaller from '../../images/GalleryHero-min.jpg';
import brochureRiana from '../../images/brochureRiana.pdf';
import styles from './Gallery.module.scss';

import firstImage2 from '../../images/_D812016-min.jpg';
import secondImage2 from '../../images/_D812026-min.jpg';
import thirdImage2 from '../../images/interiorImage-min.jpg';

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
    <div className={styles.gallery}>
      <HeroImage
        text1={<>DESIGN</>}
        text2={<>CLASSIC YET MODERN</>}
        image={HeroImageForGaller}
      />
      <h4 className={styles.mainHeading}>Gallery</h4>
      <div className={styles.text}>
        <h3>DESIGN</h3>
        <h4>CLASSIC YET MODERN</h4>
        <p>
          Living, dining and guest cabins are luxuriously fitted and furnished
          with high ceilings. Outdoor areas have expansive open decks with
          shaded areas for an optimum experience of the nature and oceanic
          surroundings that abound en-route, at anchor or at port.
        </p>
      </div>
      <TextGallery
        headline1="EXTERIOR"
        headline2="SPACE AND COMFORT"
        text={
          <p>
            With three extensive areas for sunbathing and entertaining, guests
            may relax on the flybridge, forward or aft decks. <br /> <br />
            There are also two outdoor dining areas on the flybridge and aft
            decks which can be shaded during the day and open to the stars at
            night.
          </p>
        }
      />
      <h1 id="exterior"> </h1>

      <Carousel images={[firstImage, secondImage, thirdImage, fourthImage]} />

      <TextGallery
        headline1="INTERIOR"
        headline2="BESPOKE AND TIMELESS"
        text={
          <p>
            Dining and entertainment areas includes a lounge, bar and dining
            area for up to 10 people. Sleeping accommodation comprises 2 x Queen
            and 2 x Twin cabins (with an extra sleep sofa in each twin cabin).
            There is a further double cabin adjacent to the wheel house which is
            ideal accommodation for nannies, security, staff or extra guests.
            <br /> <br /> All cabins are fitted with ensuite bathrooms.
          </p>
        }
      />
      <h1 id="interior"> </h1>
      <Carousel images={[firstImage2, secondImage2, thirdImage2]} />

      <div className={styles.section__arrowContainer}>
        <a href={brochureRiana} download="Riana Brochure">
          <button type="button" className={styles.button}>
            DOWNLOAD E-BROCHURE
          </button>
        </a>
        <button
          type="button"
          className={styles.section__arrow}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
