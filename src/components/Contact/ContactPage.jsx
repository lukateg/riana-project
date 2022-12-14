import styles from './ContactPage.module.scss';
import ContactForm from './ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ContactPage = () => (
  <>
    <Navbar />
    <section className={styles.samoZaPrimer} />
    <ContactForm />
    <Footer />
  </>
);

export default ContactPage;
