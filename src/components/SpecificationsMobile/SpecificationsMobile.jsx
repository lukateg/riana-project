/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import styles from './SpecificationsMobile.module.scss';
import image from '../../images/birdView-min.jpg';

function Layout() {
  const [images, setImages] = useState({
    firstImage: true,
    secondImage: false,
    thirdImage: false
  });
  return (
    <div className={styles.section}>
      <h2>specifications</h2>
      <div className={styles.section__content}>
        <div className={styles.section__buttons}>
          <div>
            <button
              type="button"
              className={`${styles.section__button}`}
              onMouseEnter={() =>
                setImages({
                  firstImage: true,
                  secondImage: false,
                  thirdImage: false
                })
              }
              onClick={() =>
                setImages({
                  firstImage: true,
                  secondImage: false,
                  thirdImage: false
                })
              }
            >
              summary
              <span
                className={`${styles.section__span} ${
                  images.firstImage
                    ? styles['section__span--active']
                    : styles['section__span--not-active']
                }`}
              />
            </button>
          </div>
          <div>
            <button
              type="button"
              className={`${styles.section__button}`}
              onMouseEnter={() =>
                setImages({
                  firstImage: false,
                  secondImage: true,
                  thirdImage: false
                })
              }
              onClick={() =>
                setImages({
                  firstImage: false,
                  secondImage: true,
                  thirdImage: false
                })
              }
            >
              equipment
              <span
                className={`${styles.section__span} ${
                  images.secondImage
                    ? styles['section__span--active']
                    : styles['section__span--not-active']
                }`}
              />
            </button>
          </div>
          <div>
            <button
              type="button"
              className={`${styles.section__button}`}
              onMouseEnter={() =>
                setImages({
                  firstImage: false,
                  secondImage: false,
                  thirdImage: true
                })
              }
              onClick={() =>
                setImages({
                  firstImage: false,
                  secondImage: false,
                  thirdImage: true
                })
              }
            >
              accomodation
              <span
                className={`${styles.section__span} ${
                  images.thirdImage
                    ? styles['section__span--active']
                    : styles['section__span--not-active']
                }`}
              />
            </button>
          </div>
        </div>
        <section className={styles.section__container}>
          <div
            className={`${styles.section__item} ${
              images.firstImage
                ? styles['section__item--active']
                : styles['section__item--not-active']
            }`}
          >
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>length</h2>
              <p>42 M | 138 FT</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>build year</h2>
              <p>2007</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>launched</h2>
              <p>2009</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>guests</h2>
              <p>8-10</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>cruising speed</h2>
              <p>10 knots</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>beam</h2>
              <p>8.45 M</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>builder</h2>
              <p>silyon yachts</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>crew</h2>
              <p>7 INTERNATIONAL CREW, STCW PROFICIENCY</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>vat registered</h2>
              <p>yes (eu)</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>engines</h2>
              <p>2 x 500 hp man</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>draft</h2>
              <p>4 m</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>designer</h2>
              <p>roberto scalvini</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>refit</h2>
              <p>2020</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>flag</h2>
              <p>malta</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>location</h2>
              <p>adriatic and mediterranean</p>
            </div>
          </div>

          <div
            className={`${styles.section__item} ${
              images.secondImage
                ? styles['section__item--active']
                : styles['section__item--not-active']
            }`}
          >
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>tender</h2>
              <p>APEX 20 A 6.40M OUTBOARD 115 HP, 9 PERSONS</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>fishing</h2>
              <p>yes</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>jet ski</h2>
              <p>sea doo gtx, 115 hp 3 persons</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>water ski</h2>
              <p>7 full sets and bauer</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>scuba diving</h2>
              <p>compressor</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>snorkling</h2>
              <p>yes</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>bbq</h2>
              <p>yes</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>safety</h2>
              <p>
                LIFE RAFT X 4, EPIRB, SART, FIRE EXT ADV, 8 FIRST AID MEDICAL
                KITS, 24 LIFE JACKETS, FLARES
              </p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>safety monitorigin</h2>
              <p>AIS TRANSPONDER, CCTV 24/7 SECURITY MONITORING</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>internet / wifi</h2>
              <p>yes</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>telephone/tv</h2>
              <p>fleet 77 internet / telephone</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>entertainment</h2>
              <p>
                FLATSCREEN TV, BOSE/FUSION MUSIC SYSTEM, APPLE TV MEDIA LIBRARY
                AND STREAMING
              </p>
            </div>
          </div>

          <div
            className={`${styles.section__item} ${
              images.thirdImage
                ? styles['section__item--active']
                : styles['section__item--not-active']
            }`}
          >
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>guest capacity</h2>
              <p>8-10</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>cabin / suites</h2>
              <p>2 DOUBLE / 2 TWIN, 1 EXTRA DOUBLE (BEHIND THE WHEELHOUSE)</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>in-room amenities</h2>
              <p>
                safe, fridge, flat screen tv and entertainment system, ensuite
              </p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>bathrooms</h2>
              <p>ensuite</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>crew cabins</h2>
              <p>located under aft deck</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>dining area interior</h2>
              <p>main saloon</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>dining area exterior</h2>
              <p>flybridge and aft deck</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>sun covers</h2>
              <p>
                BIMINI PROTECTED SUN AREAS AT FLYBRIDGE, AFT DECK AND BOW DECK
              </p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>cocktail area</h2>
              <p>LARGE COCKTAIL AREA WITH SEATING AT BOWDECK AND SUNDECK</p>
            </div>
            <div
              className={styles.section__brochure__specifications__info__data}
            >
              <h2>saloon equipment</h2>
              <p>
                FLATSCREEN TV WITH SURROUND SOUND AND APPLE TV ENTERTAINMENT
                SYSTEM
              </p>
            </div>
          </div>
        </section>
      </div>
      <img
        src={image}
        alt=""
        style={{ width: 341, height: 511, marginTop: 450 }}
      />
    </div>
  );
}

export default Layout;