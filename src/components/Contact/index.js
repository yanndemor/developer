import React from 'react';
import Field from './Field';
import TextArea from './TextArea';
// == Import : local

import './contact.scss';
const Contact = () => {
 

 
  /* const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    .then((result) => {
    alert("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
    });
    }; */

  return (
   <>
   <div className="form" id="inscription">
      <h2>Contact</h2>
     
      <form className="register-form" onSubmit="">
        <Field
          name="firstname"
          placeholder="Prenom"
          manageChange="{changeField}"
          value="{firstname}"
        />
        <Field
          name="lastname"
          placeholder="Nom"
          manageChange="{changeField}"
          value="{lastname}"
        />
        <Field
          name="email"
          type="email"
          placeholder="Adress mail"
          manageChange="{changeField}"
          value="{email}"
        />
        <Field
          name="phoneNumber"
          placeholder="Numero de telephone"
          manageChange="{changeField}"
          value="{phoneNumber}"
        />
        <TextArea 
          name="Message"
          placeholder="Message"
          manageChange="{changeField}"
          value="{message}"
        />
        <button type="submit">Envoyer</button>
        <p className="message">Déja inscrit? <a className="toggle-form" href="#">Connectez vous</a></p>
      </form>
    </div>
   </>
  );
};
export default Contact;
