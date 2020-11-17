import React from "react";
import image from "../../assets/img/stott1.jpg";
import image2 from "../../assets/img/stott2.jpg";
import image3 from "../../assets/img/stott3.jpg";
import image4 from "../../assets/img/stott4.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function StottPilates(props) {
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
  const { slMestaSt, setSlMestaSt } = props;
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
            STOTT PILATES
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            STOTT PILATES se može vežbati čitavog života, od detinjstva do
            duboke starosti jer su vežbe dozirane i prilagođene pojedincu. STOTT
            PILATES je izuzetno specifičan i sofisticiran način vežbanja
            pilatesa na originalnim terapeutskim spravama reformerima, koje je
            osmislio Jozef Pilates. Uz pomoć STOTT PILATESA očuvaćete gipkost,
            izdužiti mišiće i što je još važnije imaćete pravilno držanje tela,
            jer ćete ojačati mišiće koji čine potporu kičmenog stuba. Uvodni
            trening Stott pilatesa je besplatan. Uvodni trening podrazumeva
            pregled i analizu Vaše posture (držanja) tela. Na osnovu potreba
            Vašeg tela, terapeut pravi za Vas program vežbi, a zavisnosti od
            tipa vežbi moći ćete da se odlučite za individualne ili
            poluindividualne treninge. U toku uvodnog treninga upoznaćete se sa
            osnovnim principima vežbanja na spravi – reformeru. Vežbanjem na
            reformerima aktivirate I one mišiće koji su inače malo aktivni.
            Treninge vode sertifikovani treneri sa inostranim iskustvom i
            dipl.viši fizioterapeut
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/hGx-AH0yieU"
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
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Stott pilates{slMestaSt[0]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Subota",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[1]}
              </th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Ponedeljak",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[2]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Cetvratk",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[3]}
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    4,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Ponedeljak",
                    "2:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[4]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Sreda",
                    "2:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[5]}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Petak",
                    "4:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[6]}
              </th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Subota",
                    "4:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[7]}
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
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Utorak",
                    "6:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[8]}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    9,
                    setSlMestaSt,
                    slMestaSt,
                    "StottPilates",
                    "Subota",
                    "6:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Stott pilates {slMestaSt[9]}
              </th>
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
export default StottPilates;
