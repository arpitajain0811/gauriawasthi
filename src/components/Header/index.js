/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({ history }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={history.location.pathname === '/about' ? 'header' : 'header-black'}>
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
            Work
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
        <div className={history.location.pathname === '/about' ? 'social-media-black' : 'social-media'}>
          <a
            className="menu-wrapper"
            href="https://www.instagram.com/gauriawasthi/"
          >
            <FontAwesomeIcon icon={faInstagram} className="header-icon" />
          </a>
          <a className="menu-wrapper" href="mailto:gauriawasthi2612@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
          </a>
        </div>
      </div>
      <button
        type="button"
        className="menu-icon"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="8" fill={history.location.pathname === '/about' ? 'black' : 'white'} />
          <rect y="30" width="100" height="8" fill={history.location.pathname === '/about' ? 'black' : 'white'} />
          <rect y="60" width="100" height="8" fill={history.location.pathname === '/about' ? 'black' : 'white'} />
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
                <FontAwesomeIcon icon={faTimes} size="1x" />
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
                Work
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
              <a href="https://www.instagram.com/gauriawasthi/"><FontAwesomeIcon icon={faInstagram} className="header-icon" size="3x" /></a>
              <a href="mailto:gauriawasthi2612@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
              </a>
            </div>
          </div>
        )
          : null
      }
    </div>
  );
};

export default withRouter(Header);
