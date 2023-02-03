import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

import styles from './ContactPage.module.scss';

import ContactForm from './ContactForm/ContactForm';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import image from '../../images/heroContact2-crop.jpg';
import image2 from '../../images/kontaktSlika-min-crop.jpg';
import DownloadBrochure from '../DownloadBrochure/DownloadBrochure';

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
        'service_5pxnp3l',
        'template_wla08ps',
        form.current,
        'NP46B3XMIJvwxHdh8'
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
      <img src={image} alt="" className={styles.HeroImage} />
      <Breadcrumbs />
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
      <img src={image2} alt="" className={styles.image} />
      <DownloadBrochure />
    </div>
  );
};

export default ContactPage;
