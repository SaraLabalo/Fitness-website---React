import React from "react";
import image from "../../assets/img/cardio.jpg";
import { withRouter } from "react-router-dom";
function Cardio(props) {
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
            <h2 class="site-section-heading mb-3">CARDIO</h2>
            <p>
              {props.language
                ? " Kardio trening je najefikasniji način za skidanje masnih naslaga, postizanje i održavanja kondicije. Kardio-vežbe su neophodne za svaki efikasan program treninga jer podstiču sagorevanje masnoća ali su ujedno dobre i za celokupno zdravlje organizma. Takođe, ukoliko dugo niste vežbali, i nemate snage za druge treninge, kardio trening uvek možete prilagoditi svojim mogućnostima."
                : "Cardio training is the most effective way to remove fat deposits, achieve and maintain fitness. Cardio exercises are necessary for any effective training program because they encourage fat burning, but they are also good for the overall health of the body. Also, if you haven't exercised for a long time, and you don't have the strength for other workouts, you can always adjust the cardio workout to your abilities."}
            </p>
          </div>
        </div>
      </div>

      <div class="border-bottom">
        <div class="row no-gutters">
          <div class="col-md-12 col-lg-4">
            <div class="w-100 h-100 block-feature p-5 bg-light">
              <h2 class="underline">
                <span>Start it</span>
              </h2>
              <p>
                {props.language
                  ? " Vežbajte START IT i oslobodite se masnih naslaga. Osećaćete se lagano i puni energije."
                  : "Practice START IT and get rid of fat deposits. You will feel light and full of energy."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/startit");
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
                <span>Running</span>
              </h2>
              <p>
                {props.language
                  ? "Trčanje ceo trening sa intervalima odmora."
                  : "Running the whole workout with rest intervals."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/running");
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
                <span>Step trening</span>
              </h2>
              <p>
                {props.language
                  ? " Treing na kome se smenjuje kardio i vežbe snage uz muziku. Radi se sa step klupicom uz koreografiju."
                  : "Training that alternates between cardio and strength exercises with music. It is done with a step bench with choreography."}
              </p>
              <p>
                <a
                  onClick={() => {
                    props.history.push("/step-trening");
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

export default withRouter(Cardio);
