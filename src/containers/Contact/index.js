/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Contact.css';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');
  const [showSubmitMessage, setShowSubmitMessage] = React.useState(false);
  const sendEmail = () => {
    if (!name) {
      setError('Please fill in your Name');
    } else if (!email) {
      setError('Please fill in your Email');
    } else if (!subject) {
      setError('Please fill in the Subject');
    } else if (!message) {
      setError('Please fill in your Message');
    } else {
      const templateParams = {
        name,
        subject,
        email,
        message,
      };

      emailjs.send('gmail', 'template_x5wd3f8', templateParams, 'user_SjJLJrXam9zwWyFHLbdCA')
        .then(() => {
          // console.log('SUCCESS!', response.status, response.text);
          setShowSubmitMessage(true);
          setName('');
          setEmail('');
          setMessage('');
          setSubject('');
        }, () => {
          // console.log('FAILED...', err);
        });
    }
  };
  return (
    <>
      <div className="contact-banner-image" />
      <div className="contact">
        <div className="contact-heading">
          <h2>Contact</h2>
          Address your message to Gauri Awasthi by using the contact form.
          <br />
          <br />
          She is currently seeking more opportunities in editing & teaching.
          <br />
          <br />
          She wishes you well during the pandemic.
          <div className="social-media">
            <a href="https://www.instagram.com/gauriawasthi/"><FontAwesomeIcon icon={faInstagram} className="contact-social-media-icon" size="3x" /></a>
            <a href="mailto:gauriawasthi2612@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="contact-social-media-icon" size="3x" /></a>
          </div>
        </div>
        <form className="mail-form">
          <div>Name*</div>
          <input type="text" value={name} onChange={(e) => { setName(e.target.value); setError(''); setShowSubmitMessage(false); }} className="mail-input" />
          <div>Email*</div>
          <input type="text" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); setShowSubmitMessage(false); }} className="mail-input" />
          <div>Subject*</div>
          <input type="text" value={subject} onChange={(e) => { setSubject(e.target.value); setError(''); setShowSubmitMessage(false); }} className="mail-input" />
          <div>Message*</div>
          <textarea value={message} onChange={(e) => { setMessage(e.target.value); setError(''); setShowSubmitMessage(false); }} className="mail-input-area" />
          <div className="error-message">{error}</div>
          {showSubmitMessage ? <div className="submit-message">Thanks for reaching out. Gauri will get in touch with you shortly.</div> : null}
          <button type="button" className="submit-button" onClick={sendEmail}>Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
