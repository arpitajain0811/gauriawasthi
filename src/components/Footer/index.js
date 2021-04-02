/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="social-media">
      <a href="https://twitter.com/awasthi_gauri"><FontAwesomeIcon className="footer-social-media-icon" icon={faTwitter} size="3x" /></a>
      <a href="https://www.instagram.com/gauriawasthi/"><FontAwesomeIcon icon={faInstagram} className="footer-social-media-icon" size="3x" /></a>
      <a href="https://www.facebook.com/gauriawasthi95/"><FontAwesomeIcon icon={faFacebook} className="footer-social-media-icon" size="3x" /></a>
    </div>
    Copyright © 2021 Gauri Awasthi. All Rights Reserved.
  </div>
);

export default Footer;
