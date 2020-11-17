import React from "react";
import image from "../../assets/img/pilates.jpg";
import { withRouter } from "react-router-dom";
function Pilates(props) {
  return (
    <div class="site-section" style={{ marginTop: "100px" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="mb-5">
              <img src={image} alt="Image" class="img-fluid" />
            </p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3">PILATES</h2>
            <p>
              {props.language
                ? " Trening koji je možda najcelovitiji sinonim fitnesa generalno. Daje rezultate u povećanju elastičnosti, snage i energije, svesnosti sopstvenog tela, poboljšanje mentalne koncentracije. Utiče na poboljšanje ravnoteže i koriguje nepravilno držanje kičme. Preporučuje se početnicima i naprednim rekreativcima."
                : "Training which is perhaps the most complete synonym of fitness in general. It gives results in increasing elasticity, strength and energy, awareness of one's own body, improvement of mental concentration. It improves the balance and corrects the incorrect posture of the spine. Recommended for beginners and advanced recreationists."}
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Stott pilates</span>
              </h2>
              <p>
                {props.language
                  ? " STOTT PILATES repertoar čini više od 500 sistematičnih vežbi koje se izvode na strunjači, sa ili bez rekvizita, i na pilates mašinama. To otvara mogućnost lakog modifikovanja i prilagođavanja specifičnim zahtevima svakog pojedinca."
                  : "The STOTT PILATES repertoire consists of more than 500 systematic exercises performed on mats, with or without props, and on Pilates machines. This opens the possibility of easy modification and adaptation to the specific requirements of each individual."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/stott-pilates");
                  }}
                  class="btn btn-outline-primary py-2 px-4"
                >
                  {props.language ? "Sazanaj više" : "More"}
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5">
              <h2 class="underline">
                <span>Klasični pilates</span>
              </h2>
              <p>
                {props.language
                  ? " Pilates je inovativni i siguran mind&body program vežbanja koji se uglavnom izvodi na podlozi za vežbanje i uz upotrebu različitih rekvizita. Vežbajući Pilates razvijate svesnost o svom telu, dobru posturu i lake i graciozne pokrete."
                  : "Pilates largely avoids high impact, high power output, and heavy muscular loading. Pilates largely avoids high impact, high power output, and heavy muscular and skeletal loading. By practicing Pilates, you develop awareness of your body, good posture and light and graceful movements."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/klasican-pilates");
                  }}
                  class="btn btn-outline-primary py-2 px-4"
                >
                  {props.language ? "Sazanaj više" : "More"}
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Performer pilates</span>
              </h2>
              <p>
                {props.language
                  ? " Vežbanje na reformeru omogućava aktiviranje velikog broja mišića, celokupne muskulature tela, gde se posebna pažnja poklanja dubokim posturalim mišićima, posebno mobilnosti i stabilnosti kičmenog stuba i dubokih mišića ledja, stabilnosti pelvisa kao i ramenog pojasa."
                  : "Exercise on the reformer enables the activation of a large number of muscles, the entire musculature of the body, where special attention is paid to deep postural muscles, especially mobility and stability of the spine and deep back muscles, stability of the pelvis and shoulder girdle."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/performer-pilates");
                  }}
                  class="btn btn-outline-primary py-2 px-4"
                >
                  {props.language ? "Sazanaj više" : "More"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Pilates);
