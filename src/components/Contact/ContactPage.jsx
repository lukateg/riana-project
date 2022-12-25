import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

import styles from './ContactPage.module.scss';

import ContactForm from './ContactForm/ContactForm';
import HeroImage from '../HeroImage/HeroImage';
import image from '../../images/PNRiana-0799 2.jpeg';
import Brochure from './Brochure/Brochure';

const ContactPage = () => {
  const form = useRef();
  const [alert, setAlert] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
      setStatus(false);
    }, 1500);
  }, [alert]);

  const sendEmail = (e) => {
    e.preventDefault();

    setAlert(true);
    emailjs
      .sendForm(
        'service_pftux5l',
        'template_pb2yq4r',
        form.current,
        'LrnBWidm970xOvZ8g'
      )
      .then(
        (success) => {
          setAlert(success);
        },
        (error) => {
          setStatus(error);
        }
      );

    e.target.reset();
  };

  return (
    <div className={styles.section}>
      <HeroImage image={image} />
      {alert && (
        <Alert
          severity="success"
          className={`${styles.section__alert} ${
            alert
              ? styles['section__alert--active']
              : styles['section__alert--not-active']
          }`}
        >
          E-mail succesfully sent!
        </Alert>
      )}
      {status && (
        <Alert
          severity="error"
          className={`${styles.section__alert} ${
            status
              ? styles['section__alert--active']
              : styles['section__alert--not-active']
          }`}
        >
          An error occurred, try again later!
        </Alert>
      )}
      <ContactForm
        sendEmail={sendEmail}
        setAlert={setAlert}
        formRefference={form}
      />
      <Brochure />
    </div>
  );
};

export default ContactPage;
