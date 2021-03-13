import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = ({ history }) => (
  <div className="header">
    <div
      className="name"
      tabIndex={0}
      role="button"
      onKeyPress={() => history.push('/')}
      onClick={() => history.push('/')}
    >
      Gauri Awasthi
    </div>
    <div className="header-right">
      <div className="menu">
        <div
          className={history.location.pathname === '/about' ? 'menu-item active' : 'menu-item'}
          onClick={() => history.push('/about')}
          tabIndex={0}
          role="button"
          onKeyPress={() => history.push('/about')}
        >
          About
        </div>
        <div
          className={history.location.pathname === '/awards' ? 'menu-item active' : 'menu-item'}
          onClick={() => history.push('/awards')}
          tabIndex={0}
          role="button"
          onKeyPress={() => history.push('/awards')}
        >
          Awards & Nominations
        </div>
        <div
          className={history.location.pathname === '/publications' ? 'menu-item active' : 'menu-item'}
          onClick={() => history.push('/publications')}
          tabIndex={0}
          role="button"
          onKeyPress={() => history.push('/publications')}
        >
          Publications
        </div>
        <div
          className={history.location.pathname === '/contact' ? 'menu-item active' : 'menu-item'}
          onClick={() => history.push('/contact')}
          tabIndex={0}
          role="button"
          onKeyPress={() => history.push('/contact')}
        >
          Contact
        </div>
      </div>
      <div className="social-media">
        <a
          className="menu-wrapper"
          href="https://twitter.com/awasthi_gauri"
        >
          <FontAwesomeIcon icon={faTwitter} className="header-icon" size="2x" />
        </a>
        <a
          className="menu-wrapper"
          href="https://www.instagram.com/gauriawasthi/"
        >
          <FontAwesomeIcon icon={faInstagram} className="header-icon" size="2x" />
        </a>
        <a
          className="menu-wrapper"
          href="https://www.facebook.com/gauriawasthi95/"
        >
          <FontAwesomeIcon icon={faFacebook} className="header-icon" size="2x" />
        </a>
      </div>
    </div>
  </div>
);

export default withRouter(Header);
