import * as React from 'react';
import Layout from '../../components/Layout';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import './DoctorAnswers.css';
import doctorImg from '../../content/pexels-antoni-shkraba-5215017 1.png';
import ScrollToTop from '../../components/ScrollToTop';

export interface QuestionType {
  author: 'questioner' | 'doctor';
  text: string;
}

const questionAndAnswers: QuestionType[] = [
  {
    author: 'questioner',
    text: 'Miten koronarokotteet voivat olla turvallisia, kun ne ovat tuotu niin nopeasti markkinoille?',
  },
  {
    author: 'doctor',
    text: 'Koronarokotteet perustuvat mRNA-teknologiaan. Vaikka tämä kyseinen teknologia on kaupallisten rokotteiden osalta nyt ensimmäistä kertaa käytössä, on oleellista tiedostaa, että mRNA-teknologiaa on kehitetty jo 1990-luvulta lähtien. mRNA-teknologia perustuu siihen, että ihmisen kehoon kuljetetaan pieni määrä lähetti-RNA:ta, joka sisältää elimistölle ohjeet vaikuttavan aineen muodostamiseen ilman, että itse tätä ainetta täytyy tuoda rokotteen mukana. Tämän teknologian myötä, rokotteiden valmistus voidaan tuottaa huomattavasti aikaisempaa nopeammin.',
  },
  {
    author: 'questioner',
    text: 'Miten rokotteiden markkinoilletuloa valvotaan?',
  },
  {
    author: 'doctor',
    text: 'Rokotteita saa valmistaa vain toimiluvalliset lääketehtaat, sopimusvalmistajat tai kliinisiä tutkimuslääkkeitä valmistavat yksiköt, joilla on erillinen toimilupa rokotteita varten. Suomen osalta, rokotteita, ja lääkkeitä ylipäänsä, valvoo Fimea. Rokotteiden valmistusluvan saaminen edellyttää sekä Fimean lupaa, että Euroopan lääkkeiden hyvien tuotantotapojen noudattamista.\n\nYksittäisen rokotteen vaaditaan myös säännösteltyä lupaprosessia, ennen kuin se voidaan tuoda markkinoille. Virallistettuja lupaproseseja on useita erilaisia, mutta yhteistä niillä on se, että rokotteesta tehdään kokonaisarvio, ja sen tutkittujen hyötyjen tulee olla suuremmat kuin teoreettisten haittojen uhka. Hyväksyttävät haittavaikutukset pitää aina suhteuttaa lääkkeellä hoidettavaan sairauteen ja rokotteiden kohdalla tulee muistaa, että valtaosa rokotteista annetaan terveille ihmisille.',
  },
  {
    author: 'questioner',
    text: 'Miksi rokotteita tarvitaan?',
  },
  {
    author: 'doctor',
    text: 'Rokotteiden tarpeellisuutta voidaan tulkita kahdesta näkökulmasta: yksilö- ja väestötasolla. Yksilötasolla suurin syy rokottautumiselle on hengenvaarallisten tautioireiden välttäminen. Ennen rokotteiden yleistymistä, infektiotaudit olivat yksi yleisimmistä kuolinsyistä, niin aikuisilla kuin lapsillakin. Yksilötasolla rokotesuoja korostuu, kun rokotteen avulla voidaan välttää tietyn taudin vakava muoto ja, kun sillä voidaan estää tauteja, jotka leviävät esimerkiksi eläimistä ihmiseen.\n\nVäestötasolla rokottautuminen korostuu entisestään. Laaja rokotekattavuus suojaa myös niitä, joilla ei ole rokotetta, estäen muun muassa infektiotautien leviämisen. Rokotteiden laumasuojan avulla on pystytty vuosien varrella kitkemään muuten jopa hengenvaarallisia tauteja, kuten esimerkiksi isorokon, joka vielä 1970-luvulla aiheutti jopa 2 miljoonan ihmisen kuoleman vuosittain.',
  },
];

const DoctorAnswers = () => {
  return (
    <ScrollToTop>
      <Layout>
        <div className="ask-doctor-header">
          <h3 style={{ marginBottom: 48 }}>
            Lääkäri vastaa on palsta, jossa juuri sinä voit kysyä mieltä askarruttavista, rokotteisiin liittyvistä
            asioista. Sitä mukaa, kun lääkärimme ovat vastanneet esitettyihin kysymyksiin, julkaistaan ne tällä
            sivustolla.
          </h3>
          <div className="round-photo-container">
            <img className="image" src={doctorImg} style={{ maxHeight: '100%' }} />
          </div>
          <i>Leena Lemminkäinen, yleislääkäri</i>
        </div>
        <div className="qa-container" style={{ display: 'flex', flexDirection: 'column', marginBottom: 48 }}>
          {questionAndAnswers.map((a) =>
            a.author === 'questioner' ? <b key={a.text}>{a.text}</b> : <p key={a.text}>{a.text}</p>,
          )}
          <QuestionForm />
        </div>
      </Layout>
    </ScrollToTop>
  );
};

export default DoctorAnswers;
