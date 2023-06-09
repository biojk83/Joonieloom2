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
        <form onSubmit={(e) => handleSubmit(e)} method="POST" data-netlify="true">
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              
              type={'number'}
              labelName={'Phone Number'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                
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
