/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="social-media">
      <a href="https://www.instagram.com/gauriawasthi/"><FontAwesomeIcon icon={faInstagram} className="footer-social-media-icon" /></a>
      <a href="mailto:gauriawasthi2612@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="footer-social-media-icon" />
      </a>
    </div>
    Copyright © 2021 Gauri Awasthi. All Rights Reserved.
  </div>
);

export default Footer;
