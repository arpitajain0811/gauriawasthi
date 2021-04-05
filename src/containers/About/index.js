import React from 'react';
import aboutImg2 from '../../assets/about2.jpg';
import aboutImg1 from '../../assets/about1.jpg';
import './About.css';

const About = () => (
  <div className="about">
    <div className="ltr">
      <img className="about-img" src={aboutImg1} alt="gauri-awasthi" />
      <div className="about-content">
        <h2>
          Poet. Writer. Editor. Educator. Translator. Filmmaker.
        </h2>
        <div className="about-text">
          Gauri Awasthi is born and raised on the banks of River Ganges,
          in an industrial town called Kanpur. She is the Poetry Editor of
          {' '}
          <a className="about-link" href="http://mcneesereview.mcneese.edu/">
            <i> McNeese Review</i>
          </a>
          , a poetry reader for
          {'   '}
          <a className="about-link" href="https://theoffingmag.com">
            <i>The Offing</i>
          </a>
          {'  '}
          and was an honorable
          mention in
          {' '}
          {/* <a className="about-link" href="https://theoffingmag.com"> */}
          <i>The Aurora Journal</i>
          {/* </a> */}
          {' '}
          Summer Poetry Contest. She is currently
          an M.F.A candidate at
          <i> McNeese State University </i>
          in Louisiana, where she has
          been awarded the John Wood Poetry Prize. Awasthi also currently teaches
          composition classes with a focus on sustainability at
          <i> McNeese State University. </i>
          A formally trained Bharatanatyam dancer, storytelling is her soul force.
          When not writing or dancing, she runs
          {' '}
          <a className="about-link" href="https://www.instagram.com/theveganwardrobe/">
            <i>The Vegan Wardrobe</i>
          </a>
          {' '}
          with her sister where
          she raises awareness about sustainable fashion as well as animal and human
          rights in the fashion industry. Her writing has been previously published in
          {' '}
          <a className="about-link" href="https://thewire.in/">
            The Wire,
          </a>
          {' '}
          in two anthologies by
          {' '}
          <a className="about-link" href="https://penguin.co.in/">
            <i>Penguin (India),</i>
          </a>
          {' '}
          <a className="about-link" href="https://www.buzzfeed.com/in">
            <i>Buzzfeed,</i>
          </a>
          {' '}
          <a className="about-link" href="https://www.filmcompanion.in/">
            <i>Film Companion</i>
          </a>
          {' '}
          and others.
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

export default About;
