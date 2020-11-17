import React from "react";
import image from "../../assets/img/core.jpg";

function AboutUs(props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/heroImage.jpg") + ")",
        }}
        className="page-header page-header-xs"
      ></div>
      <div class="container">
        <div class="row" style={{ paddingTop: "50px" }}>
          <div class="col-lg-6">
            <p class="mb-5">
              <img src={image} alt="Image" class="img-fluid" />
            </p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3">
              {props.language ? "O NAMA" : "About us"}
            </h2>
            <p>
              {props.language
                ? "Teretana savršeno je mesto da započnete rad na svom telu i uz pomoć profesionalnih instruktora i iskusnih trenera postanete najbolja verzija sebe. Nalazimo se na izuzetnoj lokaciji, u samom srcu Beograda u Sportskom centru „Vračar“. Ovaj kraj odlično je povezan sa ostatkom grada, što znači da do nas možete stići lako i brzo iz bilo kog kraja da dolazite. Na ekskluzivnom prostoru od oko 400m2 prostiru se moderno opremljena teretana, sale za fitness i aerobik, i sauna. Posebna prednost u odnosu na ostale fitnes centre je mogućnost da svi naši posetioci, pored programa ProGym centra mogu koristiti veliki i mali bazen i ostale sadržaje SC Vračar."
                : "The gym is the perfect place to start working on your body and with the help of professional instructors and experienced trainers become the best version of yourself. We are located in an exceptional location, in the heart of Belgrade in the Sports Center Vracar. This area is well connected with the rest of the city, which means that you can reach us easily and quickly from any area. In an exclusive area of about 400m2 there is a modern gym, fitness and aerobics rooms, and a sauna. A special advantage compared to other fitness centers is the possibility that all our visitors, in addition to the program ProGym center can use large and small pool and other facilities SC"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
