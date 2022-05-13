import * as React from 'react';
import LargeAction from '../../components/LargeAction/LargeAction';
import Layout from '../../components/Layout';
import SmallAction from '../../components/SmallAction/SmallAction';
import headerPhoto from '../../content/baby-g91bdd9f2d_1920.jpg';
import doctorPhoto from '../../content/pexels-cottonbro-7579831.jpg';
import blogPhoto from '../../content/injection-gacb88f3b0_1920.jpg';
import survey from '../../content/pexels-edward-jenner-4031321.jpg';

import './Home.css';

const Home = (): JSX.Element => {
  interface Action {
    title: string;
    description: string;
    image: string;
  }

  const smallActions: Action[] = [
    {
      title: 'Subhead',
      description:
        'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit, has audiam reformidans at. Vim ne malis primis cotidieque.',
      image: '',
    },
    {
      title: 'Subhead',
      description:
        'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit, has audiam reformidans at. Vim ne malis primis cotidieque.',
      image: '',
    },
  ];

  const current: Action[] = [
    {
      title: 'Bloggaaja-yhteistyö',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
      // image: '',
      image: blogPhoto,
    },
    {
      title: 'Lääkäri vastaa',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
      // image: '',
      image: doctorPhoto,
    },
    {
      title: 'Tutkimuksia',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
      // image: '',
      image: survey,
    },
  ];

  return (
    <div>
      <Layout>
      <div className="hero-container">
        <div className="hero-media-container">
          <img src={''} style={{ maxHeight: '100%' }}></img>
        </div>
        <div className="hero-text-container">
          <h1>Sinunkin puolestasi rokotettu.</h1>
          <button>LUE LISÄÄ</button>
        </div>
      </div>
      <div className="container">
        <h2>Joku alaotsikko tulee tähän</h2>
        <div className="action-container">
        {smallActions.map((a: Action, i: number) => (
            <SmallAction title={a.title} description={a.description} key={a.title} index={i} />
          ))}
        </div>
      </div>
      <div className="container" style={{ flexDirection: 'column', marginTop: 96 }}>
        <h2 style={{ marginBottom: 36 }}>Joku toinen alaotsikko</h2>
        <div className="action-container">
          {current.map((a: Action, i: number) => (
            <LargeAction title={a.title} description={a.description} index={i} key={i} image={a.image} />
          ))}
        </div>
      </div>
    </Layout>
    </div>
  );
};

export default Home;
