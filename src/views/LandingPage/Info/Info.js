import React from "react";
import image from "../../../assets/img/img_1.jpg";
function InfoProfile(props) {
  return (
    <div class="site-section" style={{ marginTop: "50px" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="mb-5">
              <img src={image} alt="Image" class="img-fluid" />
            </p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3">The Club</h2>
            <p>
              {props.language
                ? "Teretana je savršeno mesto za početak rada na vašem telu i uz pomoć profesionalnih instruktora i iskusnih trenera postaju najbolja verzija sebe. Nalazimo se na izuzetnoj lokaciji, u srcu Beograda, u Sportskom centru Vračar. Ovo područje je dobro povezano sa ostatkom grada, što znači da možete lako i brzo doći do nas iz bilo kojeg područja. U ekskluzivnom prostoru od oko 400m2 nalaze se moderna teretana, teretane za fitnes i aerobik, kao i sauna. Posebna prednost u odnosu na ostale fitnes centre je mogućnost da svi naši posetioci, pored programa ProGim centra, mogu da koriste veliki i mali bazen i ostale sadržaje SC"
                : "The gym is the perfect place to start working on your body and with the help of professional instructors and experienced trainers become the best version of yourself. We are located in an exceptional location, in the heart of Belgrade in the Sports Center Vracar. This area is well connected with the rest of the city, which means that you can reach us easily and quickly from any area. In an exclusive area of about 400m2 there is a modern gym, fitness and aerobics rooms, and a sauna. A special advantage compared to other fitness centers is the possibility that all our visitors, in addition to the program ProGym center can use large and small pool and other facilities SC"}
            </p>

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProfile;
