import React from 'react';
import PropTypes from 'prop-types';
/* import emailjs from 'src/utils/emailkey'; */
import emailjs from 'emailjs-com';
/* import { USER_ID } from 'src/utils/emailkey'; */
/* import Field from './Field';
import TextArea from './TextArea'; */
// == Import : local

import './contact.scss';

const Contact = () => {
  

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    /*  handleMail(); */
    emailjs.sendForm('service_yrmypg6', 'template_b8gwjne', e.target, 'user_pFNFURYfh6eP7lB7q4NlH')
      .then((result) => {
        alert('Message Sent, We will get back to you shortly', result.text);
      }, (error) => {
        alert('An error occurred, Please try again', error.text);
      });
  };

  return (
    <>
      <div className="form" id="inscription">
        <div className="title-contact">
          <h1>Contact</h1>
        </div>

        <div className="description-contact">
          <p>You can contact me about all the questions you got
            regarding my developement skills.I am avaible any time.
          </p>
          <p className="advert"><strong>Please use the form below!</strong></p>
        </div>
        {/*  <form className="register-form" onSubmit={handleSubmit}>
          <Field
            name="firstname"
            placeholder="Prenom"
            type="text"
            manageChange={changeField}
            value={firstname}
          />
          <Field
            name="lastname"
            placeholder="Nom"
            type="text"
            manageChange={changeField}
            value={lastname}
          />
          <Field
            name="email"
            type="email"
            placeholder="Adress mail"
            manageChange={changeField}
            value={email}
          />
          <Field
            name="phoneNumber"
            type="number"
            placeholder="Numero de telephone"
            manageChange={changeField}
            value={phoneNumber}
          />
          <TextArea
            name="message"
            type="text"
            placeholder="message"
            manageChange={changeField}
            value={message}
          />
          <button type="submit">Envoyer</button>

        </form> */}
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="formulaire">

            <div className="champ">
              <label htmlFor="firstname" value="Your First Name">First Name</label>
              <input type="text" name="firstname" />
            </div>
            <div className="champ">
              <label htmlFor="lastname" value="Your Last Name">Last Name</label>
              <input type="text" name="lastname" />
            </div>
            <div className="champ">
              <label htmlFor="phoneNumber" value="Your telephone number">Phone</label>
              <input type="phone" id="phoneNumber" name="phoneNumber" />
            </div>
            <div className="champ">
              <label htmlFor="email" value="your email adress">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="champ">
              <label htmlFor="message" value="Your message">Message</label>
              <textarea name="message" />
            </div>
            <div className="BoutonEnvoi">
              <input type="submit" id="button" value="Send" />
            </div>

          </div>
        </form>
      </div>
    </>
  );
};
Contact.propTypes = {
  /** value for the firstname */
  firstname: PropTypes.string.isRequired,
  /** value for the lastname */
  lastname: PropTypes.string.isRequired,
  /** value for the emailRegister */
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeField: PropTypes.func.isRequired,
  /** value for the phoneNumber */
  phoneNumber: PropTypes.string.isRequired,

};
export default Contact;
