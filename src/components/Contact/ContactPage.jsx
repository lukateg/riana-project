import ContactForm from './ContactForm/ContactForm';
import Navbar from '../Navbar/Navbar';
import HeroImage from '../HeroImage/HeroImage';
import HeroImageForContact from '../../images/HeroImageContact.jpg';
import styles from './ContactPage.module.scss';
import image from '../../images/ContactImage.jpg';

const ContactPage = () => (
  <>
    <Navbar />
    <HeroImage image={HeroImageForContact} />
    <ContactForm />
    <div className={styles.image}>
      <img src={image} alt="" />
    </div>
    <button type="button" className={styles.button}>
      DOWNLOAD E-BROCHURE
    </button>
  </>
);

export default ContactPage;
