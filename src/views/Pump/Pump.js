import React from "react";
import image from "../../assets/img/PUMP5.jpg";
import image2 from "../../assets/img/PUMP6.jpg";
import image3 from "../../assets/img/PUMP7.jpg";
import image4 from "../../assets/img/PUMP8.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function Pump(props) {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);
  const { slMestaPu, setSlMestaPu, zakazi } = props;
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
            PUMP TRENING
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            PUMP je originalni trening sa šipkom i tegovima koji oblikuje i jača
            telo. Trenutno se sprovodi u više od 13 000 klubova širom sveta.
            Najpopularniji je progam u svetu. Globalni fenomen.
            <br /> PUMP je trening sa opterećenjem i stoga je idealan za sve one
            koji svom uobičajenom aerobnom treningu žele da dodaju i trening
            snage. Kombinacija sjajne muzike, neuobičajene koreografije i
            inspirativnih instruktora motiviše vežbače do poslednjeg minuta
            treninga.
            <br /> PUMP je jedinstvena formula kojom ćete oblikovati figuru i
            izgubiti višak masnoće, a ujedno ojačati telo i samopouzdanje podići
            na viši nivo. Želite snažno, oblikovano i fit telo, a da pri tom ne
            dobijete neželjeni obim? BODYPUMP može doneti rezultate kojima
            težite i transformisati vaše telo primenemom efekta ponavljanja. Uz
            800 ponavljanja po treningu bićete vitki, snažni i nezaustavljivi! U
            uobičajenom pedesetpetominutnom času koristimo specifičnu muziku
            koja vas motiviše i vodi kroz čas uz maksimalne efekte.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/6Ux2x2mGGl4"
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
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    0,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[0]}{" "}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Subota",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[1]}{" "}
              </th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Ponedeljak",
                    "12:15",
                    "02:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[2]}{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Petak",
                    "12:15",
                    "02:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[3]}{" "}
              </th>
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
                    4,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Sreda",
                    "02:15",
                    "04:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[4]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Petak",
                    "02:15",
                    "04:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[5]}{" "}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Utorak",
                    "04:15",
                    "6:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[6]}{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Nedelja",
                    "04:15",
                    "6:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[7]}{" "}
              </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    8,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Utorak",
                    "06:15",
                    "8:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[8]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    9,
                    setSlMestaPu,
                    slMestaPu,
                    "Pump ",
                    "Cetvrtak",
                    "06:15",
                    "8:00"
                  )
                }
              >
                {" "}
                PUMP, {slMestaPu[9]}{" "}
              </th>
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
export default Pump;
