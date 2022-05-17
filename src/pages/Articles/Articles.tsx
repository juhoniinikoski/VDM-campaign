import * as React from 'react';
import Layout from '../../components/Layout';
import ArticlesBox from '../../components/ArticlesBox/ArticlesBox';
import ScrollToTop from '../../components/ScrollToTop';
import './Articles.css';
import thl from '../../content/thl.png';
import eldery from '../../content/80vrokote.png';
import childProgram from '../../content/lastenohjelma.png';
import covid from '../../content/covidyhdistelma.png';

interface Data {
  title: string;
  image: string;
  link: string;
}

const articlesData: Data[] = [
  {
    title: 'Terveyden ja hyvinvoinnin laitoksen rokotusuutisia.',
    image: thl,
    link: 'https://thl.fi/fi/web/infektiotaudit-ja-rokotukset/ajankohtaista/infektio-ja-rokotusuutiset',
  },
  {
    title: 'THL suosittelee 80 vuotta täyttäneille ja hoivakodeissa asuville iäkkäille neljättä koronarokoteannosta',
    image: eldery,
    link: 'https://thl.fi/fi/-/thl-suosittelee-80-vuotta-tayttaneille-ja-hoivakodeissa-asuville-iakkaille-neljatta-koronarokoteannosta?redirect=%2Ffi%2Fweb%2Finfektiotaudit-ja-rokotukset',
  },
  {
    title: 'Lasten kansallinen rokotusohjelma',
    image: childProgram,
    link: 'https://core.ac.uk/download/pdf/33455393.pdf',
  },
  {
    title:
      'Tutkimus: Eri merkkisten koronarokotteiden yhdistyneet vaikutukset saattavat tarjota tehokkaamman suojan kuin saman rokotteen sarja.',
    image: covid,
    link: 'https://academic.oup.com/cid/article/74/2/352/6159795?login=true',
  },
];

const Articles = () => {
  return (
    <ScrollToTop>
      <Layout showButton>
        <div className="articles-container">
          <h2 style={{ marginBottom: 48 }}>Rokotetietoa</h2>
          <div className="grid-container">
            {articlesData.map((d) => (
              <ArticlesBox key={d.link} title={d.title} image={d.image} link={d.link} />
            ))}
          </div>
        </div>
      </Layout>
    </ScrollToTop>
  );
};

export default Articles;
