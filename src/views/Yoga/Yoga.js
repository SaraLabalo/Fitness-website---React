import React from "react";
import image from "../../assets/img/yoga.jpg";
import { withRouter } from "react-router-dom";
function Yoga(props) {
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
            <h2 class="site-section-heading mb-3">YOGA</h2>
            <p>
              {props.language
                ? " Praktikovanjem tehnika joge postiže se veća emotivna uravnoteženost, odsustvo doživljaja uskraćenosti i destrukcije, zadovoljstvo sobom, osećanje smisla života, poznavanje sopstvenog načina reagovanja – kroz usredsređivanje pažnje na dešavanja u svom telu, usporavanje i produbljivanje disanja, sklad disanja i pokreta, telesnu i mentalnu relaksaciju. Na taj način se podstiče i okrenutost sadašnjosti, utemeljnost u realnosti i perspektivno posmatranje budućnosti. Hatha Yoga pogodna je za početnike, isto kao i za napredne vežbače, a preporučuje se svima kojima je potreban sklad i balans u životu."
                : "Practicing yoga techniques achieves greater emotional balance, absence of experiences of deprivation and destruction, self-satisfaction, sense of meaning of life, knowledge of one's own way of reacting - by focusing on events in one's body, slowing down and deepening breathing, harmony of breathing and movement, physical and mental relaxation . In that way, the turn of the present, grounding in reality and perspective observation of the future are encouraged. Hatha Yoga is suitable for beginners, as well as for advanced practitioners, and is recommended for everyone who needs harmony and balance in life."}
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Bakram joga</span>
              </h2>
              <p>
                {props.language
                  ? " Bikram joga poznatija kao “vrela joga” izvodi se u prostoriji zagrejanoj na 30 do 40 C. Pruža blagi efekat saune, a vežbe se izvode u serijama. Samo početna serija ima 26 položaja."
                  : "Bikram yoga, better known as hot yoga, is performed in a room heated to 30 to 40 C. It provides a mild sauna effect, and the exercises are performed in series. Only the starting series has 26 positions"}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/bakram-joga");
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
                <span>Aštanga joga</span>
              </h2>
              <p>
                {props.language
                  ? " Aštanga/Vinjasa poznata je i kao „joga snage“ koja se vežba brzo i vezano, gotovo bez pauza, u nizu. Stvara toplotu u telu, pročišćava organizam kroz cirkulaciju i znojenje. Jedna od najpoznatijih serija ove vrste joge je „Pozdrav suncu“."
                  : "Ashtanga / Vinyasa is also known as strength yoga which is practiced quickly and in a row, almost without breaks, in a row. It creates heat in the body, purifies the body through circulation and sweating. One of the most famous series of this type of yoga is Greeting to the Sun."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/astanga-joga");
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
                <span>Bakiti joga</span>
              </h2>
              <p>
                {props.language
                  ? " Mnogi kažu da je zapravo najteži oblik joge jer predstavlja punu posvećenost. Radi se o traženju puta ka Bogu i potpunom posvećenju. Izvodi se meditacijom, pevanjem mantri i duhovnih pesama."
                  : "Many say it is actually the most difficult form of yoga because it represents full commitment. It is about finding the way to God and complete sanctification. It is performed by meditation, chanting mantras and spiritual songs."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/bakiti-joga");
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

export default withRouter(Yoga);
