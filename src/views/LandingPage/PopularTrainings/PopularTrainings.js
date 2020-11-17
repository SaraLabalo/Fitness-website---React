import React from "react";
import { withRouter } from "react-router-dom";
import image1 from "../../../assets/img/bahkti.jpg";
import image2 from "../../../assets/img/klasicniP.jpg";
import image3 from "../../../assets/img/core-30.jpg";
import image4 from "../../../assets/img/trcanje.jpg";
function PopularTrainings(props) {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div
            class="heading-with-border text-center mb-5"
            style={{ width: "100%" }}
          >
            <h2 class="heading text-uppercase">
              {props.language ? "Popularni trenizi" : "Popular Trainings"}
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="media-image">
              <img src={image1} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Yoga</h2>
                <p>
                  {props.language
                    ? "Praktikovanjem tehnika joge postiže se veća emotivna uravnoteženost, odsustvo doživljaja uskraćenosti i destrukcije, zadovoljstvo sobom, osećanje smisla života."
                    : "By practicing the yoga technique, a greater emotional balance is achieved, the absence of experiences of deprivation and destruction, self-satisfaction, a sense of meaning in life."}
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/yoga");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">
                      {props.language ? "Detaljnije" : "Read more"}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={image2} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Core</h2>
                <p>
                  {props.language
                    ? "Trening koji traje 30 minuta, a donosi fantastične rezultate jeste CORE.Core je tu da te odvede na viši fitnes nivo i da u isto vreme ojača i oblikuje tvoje telo."
                    : "Training that lasts 30 minutes, and brings fantastic results, is CORE. Core is there to take you to a higher fitness level and at the same time strengthen and shape your body."}
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/core");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">
                      {props.language ? "Detaljnije" : "Read more"}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="media-image">
              <img src={image3} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Pilates</h2>
                <p>
                  {props.language
                    ? "Trening koji je možda najcelovitiji sinonim fitnesa generalno. Daje rezultate u povećanju elastičnosti, snage i energije, svesnosti sopstvenog tela."
                    : "Training which is perhaps the most complete synonym of fitness in general. It gives results in increasing elasticity, strength and energy, awareness of one's own body."}
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/pilates");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">
                      {props.language ? "Detaljnije" : "Read more"}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="media-image">
              <img src={image4} alt="Image" class="img-fluid" />
              <div class="media-image-body">
                <h2>Cardio</h2>
                <p>
                  {props.language
                    ? "Kardio trening je najefikasniji način za skidanje masnih naslaga. Kardio-vežbe su neophodne za svaki efikasan program treninga jer podstiču sagorevanje masnoća."
                    : "Cardio training is the most effective way to remove fat deposits. Cardio exercises are necessary for any effective training program because they encourage fat burning."}
                </p>
                <p>
                  <a
                    onClick={() => {
                      props.history.push("/cardio");
                    }}
                    class="btn btn-primary text-white px-4"
                  >
                    <span class="caption">
                      {props.language ? "Detaljnije" : "Read more"}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PopularTrainings);
