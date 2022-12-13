/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import styles from './Layout.module.scss';
import lowerDeck from '../../images/lower-deck.png';
import flybridgeDeck from '../../images/flybridge-deck.png';
import mainDeck from '../../images/main-deck.png';

function Layout() {
  const [images, setImages] = useState({
    firstImage: true,
    secondImage: false,
    thirdImage: false
  });
  return (
    <div className={styles.section}>
      <h2>LAYOUT</h2>
      <main className={styles.section__content}>
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
              FLYBRIDGE
            </button>
            <span
              className={`${styles.section__span} ${
                images.firstImage
                  ? styles['section__span--active']
                  : styles['section__span--not-active']
              }`}
            />
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
              MIDDLE DECK
            </button>
            <span
              className={`${styles.section__span} ${
                images.secondImage
                  ? styles['section__span--active']
                  : styles['section__span--not-active']
              }`}
            />
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
              LOWER DECK
            </button>
            <span
              className={`${styles.section__span} ${
                images.thirdImage
                  ? styles['section__span--active']
                  : styles['section__span--not-active']
              }`}
            />
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
            <p>
              The lavish spacious decks provide a multitude of areas to relax,
              tan, work, lounge or host. The life rafts, jet skis and other
              extras are present on this deck, placed strategically to be out of
              areas that are in contrast use by guests.
            </p>
            <img src={lowerDeck} alt="slika" />
          </div>

          <div
            className={`${styles.section__item} ${
              images.secondImage
                ? styles['section__item--active']
                : styles['section__item--not-active']
            }`}
          >
            <p>
              This is where you can watch tv, order a drink at the bar or take
              an afternoon nap. There are multiple areas to lounge or host, each
              more comfortable than the next.
            </p>
            <img src={mainDeck} alt="slika" />
          </div>

          <div
            className={`${styles.section__item} ${
              images.thirdImage
                ? styles['section__item--active']
                : styles['section__item--not-active']
            }`}
          >
            <p>
              These spaces contain the technical running’s of the ship are
              concealed for the guests’ comfort. We can give you a tour of our
              engine room and other operational facilities upon request.
            </p>
            <img src={flybridgeDeck} alt="slika" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Layout;