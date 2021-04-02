/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = ({ history }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={history.location.pathname === '/awards' || history.location.pathname === '/' || history.location.pathname === '/publications' ? 'header-black' : 'header'}>
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
        <div className={history.location.pathname === '/awards' || history.location.pathname === '/' || history.location.pathname === '/publications' ? 'social-media' : 'social-media-black'}>
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
      <button
        type="button"
        className="menu-icon"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="8" fill={history.location.pathname === '/awards' || history.location.pathname === '/' || history.location.pathname === '/publications' ? 'white' : 'black'} />
          <rect y="30" width="100" height="8" fill={history.location.pathname === '/awards' || history.location.pathname === '/' || history.location.pathname === '/publications' ? 'white' : 'black'} />
          <rect y="60" width="100" height="8" fill={history.location.pathname === '/awards' || history.location.pathname === '/' || history.location.pathname === '/publications' ? 'white' : 'black'} />
        </svg>
      </button>
      {
        isMenuOpen ? (
          <div className="mobile-menu">
            <div className="header header-white">
              <div
                className="name-black"
                tabIndex={0}
                role="button"
                onKeyPress={() => history.push('/')}
                onClick={() => history.push('/')}
              >
                Gauri Awasthi
              </div>
              <button type="button" className="close-icon" onClick={() => setIsMenuOpen(false)}>
                X
              </button>
            </div>
            <div className="menu-options">
              <div
                className="menu-item"
                onClick={() => { history.push('/about'); setIsMenuOpen(false); }}
                tabIndex={0}
                role="button"
                onKeyPress={() => { history.push('/about'); setIsMenuOpen(false); }}
              >
                About
              </div>
              <div
                className="menu-item"
                onClick={() => { history.push('/awards'); setIsMenuOpen(false); }}
                tabIndex={0}
                role="button"
                onKeyPress={() => { history.push('/awards'); setIsMenuOpen(false); }}
              >
                Awards & Nominations
              </div>
              <div
                className="menu-item"
                onClick={() => { history.push('/publications'); setIsMenuOpen(false); }}
                tabIndex={0}
                role="button"
                onKeyPress={() => { history.push('/publications'); setIsMenuOpen(false); }}
              >
                Publications
              </div>
              <div
                className="menu-item"
                onClick={() => { history.push('/contact'); setIsMenuOpen(false); }}
                tabIndex={0}
                role="button"
                onKeyPress={() => { history.push('/contact'); setIsMenuOpen(false); }}
              >
                Contact
              </div>
            </div>
            <div className="social-media">
              <a href="https://twitter.com/awasthi_gauri"><FontAwesomeIcon icon={faTwitter} className="header-icon" size="3x" /></a>
              <a href="https://www.instagram.com/gauriawasthi/"><FontAwesomeIcon icon={faInstagram} className="header-icon" size="3x" /></a>
              <a href="https://www.facebook.com/gauriawasthi95/"><FontAwesomeIcon icon={faFacebook} className="header-icon" size="3x" /></a>
            </div>
          </div>
        )
          : null
      }
    </div>
  );
};

export default withRouter(Header);
