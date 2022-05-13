import * as React from 'react';
import LargeAction from '../../components/LargeAction/LargeAction';
import Layout from '../../components/Layout';
import doctorPhoto from '../../content/pexels-cottonbro-7579831.jpg';
import blogPhoto from '../../content/injection-gacb88f3b0_1920.jpg';
import survey from '../../content/pexels-edward-jenner-4031321.jpg';
import './Home.css';

const Home = (): JSX.Element => {
  const [fadeProp, setFadeProp] = React.useState({
    fade: 'transparent-text',
  });

  const [overlay, setOverlay] = React.useState(false);

  React.useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp({ fade: 'fade-in' });
      setOverlay(true);
    }, 1000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  interface Action {
    title: string;
    description: string;
    image: string;
    slug: string;
  }

  const current: Action[] = [
    {
      title: 'Bloggaaja-yhteistyö',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
      // image: '',
      image: blogPhoto,
      slug: '',
    },
    {
      title: 'Lääkäri vastaa',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
      // image: '',
      image: doctorPhoto,
      slug: 'ask-doctor',
    },
    {
      title: 'Tutkimuksia',
      description: 'Lorem ipsum dolor sit amet, vim cu nobis laudem assueverit',
      // image: '',
      image: survey,
      slug: '',
    },
  ];

  return (
    <div>
      <section
        className="full-page-container"
        style={{ backgroundImage: 'url(' + require('../../content/baby-g91bdd9f2d_1920.jpg') + ')' }}
      >
        <div className={overlay ? 'container-overlay' : 'overlay'}>
          <h1 className={fadeProp.fade}>Sinunkin puolestasi rokotettu.</h1>
        </div>
      </section>
      <Layout>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <section className="container" style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h2 style={{ marginBottom: 36 }}>Joku toinen alaotsikko</h2>
              <div className="action-container">
                {current.map((a: Action, i: number) => (
                  <LargeAction
                    title={a.title}
                    description={a.description}
                    index={i}
                    key={i}
                    image={a.image}
                    slug={a.slug}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
