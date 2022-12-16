import styles from './ContactPage.module.scss';
import ContactForm from './ContactForm/ContactForm';
import Navbar from '../Navbar/Navbar';

const ContactPage = () => (
  <>
    <Navbar />
    <section className={styles.samoZaPrimer} />
    <ContactForm />
  </>
);

export default ContactPage;
