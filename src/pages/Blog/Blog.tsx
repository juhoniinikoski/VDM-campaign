import * as React from 'react';
import Layout from '../../components/Layout';
import ScrollToTop from '../../components/ScrollToTop';
import blogPhoto from '../../content/injection-gacb88f3b0_1920.jpg';
import './Blog.css';

function Blog() {
  return (
    <ScrollToTop>
      <Layout showButton>
        <div style={{ width: '100%', marginBottom: 48, maxWidth: 900 }}>
          <div className="blog-container">
            <section className="blog-image">
              <img style={{ maxHeight: '100%' }} className="image" src={blogPhoto} />
            </section>
            <section className="blog-text">
              <h2>Miten puhun lapsilleni rokotuksista?</h2>
              <p>
                Kävimme juuri 4-vuotiaan esikoiseni kanssa neuvolassa ottamassa nelosrokotteen. Tyttöä jännitti
                edellisenä iltana niin paljon, ettei nukkumaanmenosta meinannut tulla mitään. Puhuimme kuitenkin
                rokottamisen merkityksestä yhdessä ja lopulta sain vakuutettua hänelle, että rokotusta ei ole syytä
                pelätä. Kerran se vain kirpaisee. Tässä postauksessa esittelenkin parhaita keinoa puhua lapsille
                rokotuksista.
              </p>
              <p>
                Vaikka helpoimman tuntuinen vaihtoehto olisi lakaista ongelma maton alle ja todeta vain “hyvin se
                menee”, kannattaa kuitenkin rokotteista ja rokotustilanteen kulusta olla avoin lapselle. Voit aloittaa
                kertomalla lapselle miksi rokotteita annetaan ja korostaa niiden suurta merkitystä terveydelle. On hyvä
                myös muistuttaa siitä, että rokotteiden ottaminen on aivan normaali asia, jonka kaikki tekevät
                säännöllisin väliajoin.
              </p>
              <p>
                Rokotustilanne on hyvä kuvailla tarkasti ennen rokotukseen menemistä, jotta lapsi tietää mitä on tulossa
                eikä täten mene niin paniikkiin. Vanhempana voit ottaa lapsen syliin tai pitää häntä kädestä rokotuksen
                ajan tuodaksesi turvallisuuden tuntua. Myös nallen tai muun tärkeän lelun voi ottaa mukaan lohduksi.
                Kerro lapselle, että rokotus kestää vain muutaman sekunnin, ja varsinkin jos käden osaa pitää rentona,
                voi olla ettei pistosta tunne ollenkaan. Jos edelleen tuntuu hankalalta saada lapsi rauhoittumaan, voit
                luvata mennä rokotuksen jälkeen vaikka jätskille, jotta rokotustilanne liittyy lapsen mielessä johonkin
                hauskaan asiaan mitä odottaa innolla.
              </p>
              <p>
                Toivottavasti vinkeistäni oli apua teille! Kommentoikaa toki alle omia kokemuksia ja neuvoja lapsen
                rokotuspelkoon.
              </p>
              <i>Teksti toteutettu yhteistyössä THL:n kanssa.</i>
              <p>Julkaistu 16.5.2022</p>
            </section>
          </div>
          {/* <h3>Katso myös nämä</h3> */}
        </div>
      </Layout>
    </ScrollToTop>
  );
}

export default Blog;
