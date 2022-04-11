import * as React from 'react';
import LargeAction from '../../components/LargeAction/LargeAction';
import Layout from '../../components/Layout';
import SmallAction from '../../components/SmallAction/SmallAction';
import './Home.css';

const Home: React.FunctionComponent = () => {
  interface Action {
    title: string;
    description: string;
  }

  const smallActions: Action[] = [
    {
      title: 'Subhead',
      description:
        'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit, has audiam reformidans at. Vim ne malis primis cotidieque.',
    },
    {
      title: 'Subhead',
      description:
        'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit, has audiam reformidans at. Vim ne malis primis cotidieque.',
    },
  ];

  const current: Action[] = [
    {
      title: 'Bloggaaja-yhteistyö',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
    },
    {
      title: 'Lääkäri vastaa',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
    },
    {
      title: 'Tutkimuksia',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
    },
  ];

  return (
    <Layout>
      <div className="hero-container">
        <div className="hero-media-container"></div>
        <div className="hero-text-container">
          <h1>Sinunkin puolestasi rokotettu.</h1>
          <button>LUE LISÄÄ</button>
        </div>
      </div>
      <div className="container">
        <h2>Joku alaotsikko tulee tähän</h2>
        <div className="action-container">
          {smallActions.map((a: Action, i: number) => (
            <SmallAction title={a.title} description={a.description} key={i} />
          ))}
        </div>
      </div>
      <div className="container" style={{ flexDirection: 'column', marginTop: 96 }}>
        <h2 style={{ marginBottom: 36 }}>Joku toinen alaotsikko</h2>
        <div className="action-container">
          {current.map((a: Action, i: number) => (
            <LargeAction title={a.title} description={a.description} index={i} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
