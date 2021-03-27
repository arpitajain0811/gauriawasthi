import React from 'react';
import aboutImg from '../../assets/about.jpg';
import aboutImg2 from '../../assets/about2.jpg';
import './About.css';

const About = () => (
  <div className="about">
    <div className="ltr">
      <img className="about-img" src={aboutImg} alt="gauri-awasthi" />
      <div className="about-content">
        <h2>
          Poet. Writer. Editor. Educator. Journalist. Translator. Filmmaker.
        </h2>
        <div className="about-text">
          Gauri Awasthi is born and raised on the banks of River Ganges,
          in an industrial town called Kanpur. She is the Poetry Editor of
          McNeese Review, a poetry reader for The Offing and was an honorable
          mention in The Aurora Journal Summer Poetry Contest. She is currently
          an M.F.A candidate at McNeese State University in Louisiana, where she has
          been awarded the John Wood Poetry Prize. Awasthi also currently teaches c
          omposition classes with a focus on sustainability at McNeese State University.
          A formally trained Bharatanatyam dancer, storytelling is her soul force.
          When not writing or dancing, she runs The Vegan Wardrobe with her sister where
          she raises awareness about sustainable fashion as well as animal and human
          rights in the fashion industry. Her writing has been previously published in
          The Wire, in two anthologies by Penguin (India), Buzzfeed, Film Companion and
          others.
        </div>
        <div className="about-sub-text">
          You can find her mildly controversial critiques on colonialism on her
          Twitter and Instagram: @gauriawasthi
        </div>
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
