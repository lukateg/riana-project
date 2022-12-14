/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import styles from './ContactForm.module.scss';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pftux5l',
      'template_pb2yq4r',
      form.current,
      'LrnBWidm970xOvZ8g'
    );
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    e.target.reset();
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__contactInfo}>
        <h2>CONTACT US</h2>
        <div>
          <h3>Tel:</h3>
          <h5>+382 32 678 890</h5>
        </div>
        <div>
          <h3>Email:</h3>
          <h5>info@rianayacht.com </h5>
        </div>

        <p>
          Alternatively, please complete the form below and one of our team
          members will respond to your request shortly.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.section__inputs}>
          <div className={styles.section__inputContainer}>
            <label>Title</label>
            <input type="text" name="title" />
          </div>
          <div className={styles.section__inputContainer}>
            <label>First name *</label>
            <input type="text" name="firstName" required />
          </div>
          <div className={styles.section__inputContainer}>
            <label>Last name *</label>
            <input type="text" name="lastName" required />
          </div>
          <div className={styles.section__inputContainer}>
            <label>Phone</label>
            <input type="text" name="phone" />
          </div>
        </div>
        <div className={styles.section__inputs}>
          <div className={styles.section__inputContainer}>
            <label>Inquiry type</label>
            <input type="text" name="nquiry" />
          </div>
          <div className={styles.section__inputContainer}>
            <label>Email *</label>
            <input type="email" name="email" required />
          </div>
          <div className={styles.section__inputContainer}>
            <label>Message</label>
            <textarea name="message" />
          </div>
        </div>
        <button className={styles.section__button} type="submit">
          submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
