import React from "react";
import image from "../../assets/img/core.jpg";
import { withRouter } from "react-router-dom";
function Core(props) {
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
            <h2 class="site-section-heading mb-3">CORE</h2>
            <p>
              {props.language
                ? "Trening koji traje 30 minuta, a donosi fantastične rezultate jeste CORE. Po novom letnjem rasporedu i on je uveden kao novi trening. Core je tu da te odvede na viši fitnes nivo i da u isto vreme ojača i oblikuje tvoje telo. DA LI SI IKAD BIO NA OVOM TRENINGU? Ako nisi, sad je pravo vreme da vidiš zašto svi toliko vole Core i kako će on da doprinese tvom izgledu. Core kombinuje najbolje elemente personalnog treninga sa motivišućom muzikom i energijom grupnog fitnes treninga."
                : "A training that lasts 30 minutes and brings fantastic results is CORE. According to the new summer schedule, it was also introduced as a new training. Core is there to take you to a higher fitness level and at the same time strengthen and shape your body. HAVE YOU EVER BEEN AT THIS TRAINING? If you haven't, now is the right time to see why everyone loves Core so much and how he will contribute to your appearance. Core combines the best elements of personal training with motivating music and the energy of group fitness training."}
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>TRX CIRCUIT / PUMP</span>
              </h2>
              <p>
                {props.language
                  ? " Najbolje je vežbati sa sopstvenom težinom. Popularni ,,viseći” trening TRX vam omogućava upravo to. Prilgođen je svim nivoima kondicije."
                  : "It is best to exercise with your own weight. The popular hanging training TRX allows you to do just that. It is adapted to all levels of fitness."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/pump");
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
                <span>Force trening</span>
              </h2>
              <p>
                {props.language
                  ? " Bazičnim pokretima oblikujte vaše telo. Povećajte mišićni tonus i ojačajte mišiće celog tela."
                  : "Shape your body with basic movements. Increase muscle tone and strengthen the muscles of the whole body."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/force-trening");
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
                <span>Core 30</span>
              </h2>
              <p>
                {props.language
                  ? " Želite trbušnjake, moraćete malo da se potrudite . Pored korekcije ishrane, vežbajte core i imaćete stomak kakav ste oduvek želeli. I vaša leđa će vam biti zahvalna."
                  : "You want abs, you have to work a little harder. In addition to correcting your diet, exercise your core and you will have the stomach you have always wanted. And your back will thank you."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/core30");
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

export default withRouter(Core);
