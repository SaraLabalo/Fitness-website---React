import React from "react";

import trainer1 from "../../../assets/img/person_1.jpg";
import trainer2 from "../../../assets/img/person_2.jpg";
import trainer3 from "../../../assets/img/person_3.jpg";
import trainer4 from "../../../assets/img/person_4.jpg";
function OurTrainers(props) {
  return (
    <div class="site-section bg-light">
      <div class="container">
        <div class="heading-with-border text-center mb-5">
          <h2 class="heading text-uppercase">
            {props.language ? "Nasi Treneri" : "Our Trainers"}
          </h2>
        </div>

        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="block-trainer">
              <img src={trainer4} alt="Image" class="img-fluid" />
              <div class="block-trainer-overlay">
                <h2 style={{ color: "white", marginTop: "70px" }}>
                  Jonah Smith
                </h2>

                <p>
                  <a href="#" class="p-2">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-instagram"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="block-trainer">
              <img src={trainer3} alt="Image" class="img-fluid" />
              <div class="block-trainer-overlay">
                <h2 style={{ color: "white", marginTop: "70px" }}>
                  Jonah Smith
                </h2>

                <p>
                  <a href="#" class="p-2">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-instagram"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="block-trainer">
              <img src={trainer4} alt="Image" class="img-fluid" />
              <div class="block-trainer-overlay">
                <h2 style={{ color: "white", marginTop: "70px" }}>
                  Jonah Smith
                </h2>

                <p>
                  <a href="#" class="p-2">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-instagram"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="block-trainer">
              <img src={trainer3} alt="Image" class="img-fluid" />
              <div class="block-trainer-overlay">
                <h2 style={{ color: "white", marginTop: "70px" }}>
                  Jonah Smith
                </h2>

                <p>
                  <a href="#" class="p-2">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-instagram"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="block-trainer">
              <img src={trainer2} alt="Image" class="img-fluid" />
              <div class="block-trainer-overlay">
                <h2 style={{ color: "white", marginTop: "70px" }}>
                  Jonah Smith
                </h2>

                <p>
                  <a href="#" class="p-2">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-instagram"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="block-trainer">
              <img src={trainer1} alt="Image" class="img-fluid" />
              <div class="block-trainer-overlay">
                <h2 style={{ color: "white", marginTop: "70px" }}>
                  Jonah Smith
                </h2>

                <p>
                  <a href="#" class="p-2">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2">
                    <span class="icon-instagram"></span>
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

export default OurTrainers;
