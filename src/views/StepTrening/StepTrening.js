import React from "react";
import image from "../../assets/img/step1.jpg";
import image2 from "../../assets/img/step3.jpg";
import image3 from "../../assets/img/step2.jpg";
import image4 from "../../assets/img/step4.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function StepTrening(props) {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);

  const postavi = () => {
    var array = [];
    array = comments;

    var ukupno = (totalRating + rating) / uk;

    var obj = {
      text: comment,
      rating: rating,
    };

    array.push(obj);
    setUk(2);
    setTotalRating(ukupno);
    setComments(array);
    setComment("");
    setRating(0);
    console.log(array);
    document.getElementById("create-course-form").reset();
  };

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setComment(value);
  };
  const { slMestaSte, setSlMestaSte } = props;
  /*Copy Up*/
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div class="row " style={{ marginTop: "70px" }}>
        <div class="col-3 padding0">
          <img src={image} alt="Image" class="img-fluid" />
        </div>
        <div class="col-3 padding0">
          <img src={image2} alt="Image" class="img-fluid" />
        </div>
        <div class="col-3 padding0">
          <img src={image3} alt="Image" class="img-fluid" />
        </div>
        <div class="col-3 padding0">
          <img src={image4} alt="Image" class="img-fluid" />
        </div>
      </div>

      <div class="row" style={{ marginTop: "20px" }}>
        <div class="col-lg-5 sm-12 ml-auto">
          <h2 class="site-section-heading mb-3" style={{ padding: "10px" }}>
            STEP TRENING
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            Step aerobik je koreografski trening sa mnogo koracanja i gibanja,
            sto daje takodje, formu plesu, ali se sve vreme koristi platforma za
            «penjanje». Platforma se moze prilagoditi na nekoliko razlicitih
            visina, sto omogucava rad vezbacima razlicite utreniranosti. Trening
            se sastoji iz vise vrsta koraka koji se mogu kombinovati sa radom
            ruku i uz dodatna malo opterecenje dvorucnih tegova, pa osim
            izdrzljivosti i sagorevanja kalorija, radi se i na tonusu misica.
            Postoji veliko interesovanje za ovu vrstu aerobika, koju bodibilderi
            koriste kao kardio-trening.
            <br /> <br />
            To je sistem joge koji dinamično povezuje inače statitične klasične
            joga položaje. Aštanga/Vinjasa je vrlo zahtevan sistem i to je „joga
            snage“ koja se vežba brzo i vezano u nizu. <br /> <br />
            Svrha te joge je da se stvori toplota u telu a koja pročišćava kroz
            cirkulaciju i znojenje. Jedna od najpoznatijih serija te škole je i
            „Pozdrav suncu“. Pevačica madona je poklonik Aštanga joge već 30
            godina (vidimo je na slici). Na velikoj slici možete videti tkzv.
            „Osnovnu seriju“ (i bolje da ne znate kako izgleda napredna serija).
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/7LtXAhpSPmg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <h2 class="terminiNaslov">RASPORED TERMINA</h2>
          <table class="Termini" style={{ width: "60%", margin: "0 auto" }}>
            <tr>
              <th></th>
              <th>Ponedeljak</th>
              <th>Utorak</th>
              <th>Sreda</th>
              <th>Cetvrtak</th>
              <th>Petak</th>
              <th>Subota</th>
            </tr>
            <tr>
              <th>10:15-12:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    0,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Ponedeljak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[0]}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Petak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[1]}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Cetvrtak",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[2]}
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Sreda",
                    "2:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[3]}
              </th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    4,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Cetvrtak",
                    "2:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[4]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Subota",
                    "2:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[5]}
              </th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Sreda",
                    "4:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[6]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Petak",
                    "4:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[7]}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    8,
                    setSlMestaSte,
                    slMestaSte,
                    "StepCardio",
                    "Sreda",
                    "6:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Step Cardio{slMestaSte[8]}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>Komentari</h3>
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col">
          <ul style={{ margin: "0", padding: "0" }}>
            {comments.map((item) => (
              <li key={item} style={{ listStyleType: "none" }}>
                <div
                  style={{
                    height: "70px",
                    width: "100%",
                    border: "1px solid black",
                    marginTop: "10px",
                  }}
                >
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="blue"
                    numberOfStars={6}
                    name="rating"
                  />
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Ostavi Komentar</h3>
        </div>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col">
          <form id="create-course-form">
            <div style={{ width: "90%" }}>
              <StarRatings
                rating={rating}
                starRatedColor="blue"
                changeRating={changeRating}
                numberOfStars={6}
                name="rating"
              />
            </div>
            <Input type="text" name="comment" onChange={handleOnChange}></Input>
            <Button
              color="primary"
              onClick={postavi}
              style={{ marginTop: "15px" }}
            >
              Postavi commentar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default StepTrening;
