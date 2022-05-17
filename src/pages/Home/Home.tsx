import * as React from 'react';
import LargeAction from '../../components/LargeAction/LargeAction';
import Layout from '../../components/Layout';
import doctorPhoto from '../../content/pexels-cottonbro-7579831.jpg';
import blogPhoto from '../../content/injection-gacb88f3b0_1920.jpg';
import survey from '../../content/pexels-edward-jenner-4031321.jpg';
import ScrollToTop from '../../components/ScrollToTop';
import './Home.css';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */

const Home = (): JSX.Element => {
  const [fadeProp, setFadeProp] = React.useState({
    fade: 'transparent-text',
  });

  const [overlay, setOverlay] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);

  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const timeout = setInterval(() => {
      setFadeProp({ fade: 'fade-in' });
      setOverlay(true);
    }, 1000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => domRef.current && observer.unobserve(domRef.current);
  }, []);

  interface Action {
    title: string;
    description: string;
    image: string;
    slug: string;
  }

  const current: Action[] = [
    {
      title: 'Rokotetietoa',
      description: 'Tutkimuksia ja artikkeleita rokotteista. Kerättynä sinua varten.',
      image: survey,
      slug: 'articles',
    },
    {
      title: 'Miten puhun lapsilleni rokotuksista?',
      description: 'Esittelemme parhaat keinot puhua lapsille rokotuksista.',
      image: blogPhoto,
      slug: 'blog',
    },
    {
      title: 'Lääkäri vastaa',
      description: 'Mietityttävätkö rokotteet? Lääkärimme vastaa juuri sinua mietityttäviin kysymyksiin.',
      image: doctorPhoto,
      slug: 'ask-doctor',
    },
  ];

  return (
    <ScrollToTop>
      <section
        className="full-page-container"
        style={{ backgroundImage: 'url(' + require('../../content/baby-g91bdd9f2d_1920.jpg') + ')' }}
      >
        <div className={overlay ? 'container-overlay' : 'overlay'}>
          <h1 className={fadeProp.fade}>Sinun puolestasi rokotettu.</h1>
        </div>
      </section>
      <Layout showButton={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <section className="container" style={{ flexDirection: 'column' }}>
            <div ref={domRef} className={isVisible ? 'is-visible' : 'hidden'}>
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
    </ScrollToTop>
  );
};

export default Home;
