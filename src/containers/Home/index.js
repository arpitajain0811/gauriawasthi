import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => (
  <>
    <div className="home-banner-image">
      <div className="home-name">Gauri Awasthi</div>
      <div className="hindi-name">गौरी अवस्थी</div>
      <div className="home-subtitle">Poet. Writer. Editor. Educator. Translator. Filmmaker.</div>
      <a className="download-link" href="/Resume_Gauri_A.pdf" download>
        <FontAwesomeIcon icon={faDownload} className="download-icon" />
        Resume
      </a>
    </div>
    <div className="home" />
  </>
);

export default Home;
