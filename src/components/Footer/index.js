/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="social-media">
      <a href="https://twitter.com/awasthi_gauri"><img src={twitter} alt="" className="social-media-icon" /></a>
      <a href="https://www.instagram.com/gauriawasthi/"><img src={insta} alt="" className="social-media-icon" /></a>
      <a href="https://www.facebook.com/gauriawasthi95/"><img src={facebook} alt="" className="social-media-icon" /></a>
    </div>
    Copyright © 2021 Gauri Awasthi. All Rights Reserved.
  </div>
);

export default Footer;
