import React from 'react';
import { withRouter } from 'react-router-dom';
import aboutImg2 from '../../assets/about2.jpeg';
import aboutImg1 from '../../assets/about1.jpeg';
import './About.css';

const About = ({ history }) => (
  <div className="about">
    <div className="ltr">
      <img className="about-img" src={aboutImg1} alt="gauri-awasthi" />
      <div className="about-content">
        <h2>
          Poet. Writer. Editor. Educator. Translator. Filmmaker.
        </h2>
        <div className="about-text">
          Gauri Awasthi was born and raised on the banks of River Ganges,
          in an industrial town called Kanpur. She is an Editorial Assistant at
          {'   '}
          <a className="about-link" href="https://theoffingmag.com">
            <i>The Offing</i>
          </a>
          . She has also served as a Poetry Editor for
          {' '}
          <a className="about-link" href="http://mcneesereview.mcneese.edu/">
            <i> McNeese Review</i>
          </a>
          {' '}
          while she was an M.F.A candidate at McNeese State University. Awasthi has
          taught composition writing, poetry, and sustainability. A formally trained Bharatanatyam
          dancer, storytelling is her soul force. When not writing or dancing, she runs
          {' '}
          <a className="about-link" href="https://www.instagram.com/theveganwardrobe/">
            <i>The Vegan Wardrobe</i>
          </a>
          {' '}
          with her sister where she raises awareness
          about decolonising sustainability in fashion. You can read her work
          {' '}
          <span
            className="about-link"
            onClick={() => history.push('/publications')}
            onKeyPress={() => history.push('/publications')}
            tabIndex={0}
            role="button"
          >
            <i>here</i>
          </span>
          .
        </div>
        {/* <div className="about-sub-text">
          You can find her mildly controversial critiques on colonialism on her
          Twitter and Instagram: @gauriawasthi
        </div> */}
      </div>
    </div>
    <div className="ltr">
      <div className="about-content-2">
        <h2>
          Education
        </h2>
        <div className="about-text-2">
          <div>
            Master of Fine Arts in Creative Writing, Poetry 2021-
            McNeese State University, Lake Charles, LA
          </div>
          <div>
            Master of Arts, English 2020 - McNeese State University, Lake Charles, Louisiana
          </div>
          <div>
            Akhil Bhartiya Gandharva Mahavidyalaya Mandal, Mumbai, MH
          </div>
          <div>
            Visharad (Bachelor of Art) in Bharatnatyam - 2013
          </div>
          <div>
            Bachelor of Mass Media 2017- Journalism -
            Wilson College, University of Mumbai, Maharasthra
          </div>
        </div>
      </div>
      <img className="about-img" src={aboutImg2} alt="gauri-awasthi" />
    </div>
  </div>
);

export default withRouter(About);
