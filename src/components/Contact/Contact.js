import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>
          Please send us a message if you have any questions - Monday to Friday,
          9am - 5pm EST.
        </p>
        <p>We look forward to hearing from you.</p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>info.joonieloom@gmail.com</p>
        <p>Monday to Friday - 9am - 5pm EST</p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          You can email us via the contact form below:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form method="POST" data-netlify="true">
          <div className={styles.contactForm}>
            <input
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Full Name'}
              name="name"
              required
            />
            <input
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Phone Number'}
              required
            />
            <input
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              name="email"
              required
            />
            <div className={styles.commentInput}>
              <input
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
