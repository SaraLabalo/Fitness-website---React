import React from "react";
import image from "../../assets/img/bakram4.jpg";
import image2 from "../../assets/img/bakram2.jpg";
import image3 from "../../assets/img/bakram3.jpg";
import image4 from "../../assets/img/bakram4.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
function BakramJoga(props) {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);
  const { slMestaBi, setSlMestaBi, zakazi } = props;
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
        <div class="col-lg-5 ml-auto">
          <h2 class="site-section-heading mb-3">BIKRAM JOGA</h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p>
            Bikram jogu je osnovao Bikram Čouduri (vidimo ga na slici sa dvoje
            vežbača) je „vrela joga“ u kojoj se prostorija zagreje na 30 – 40 C
            pa se uz intenzivno vežbanje dobije i efekat saune. Ta joga se vežba
            u serijama od kojih je najpoznatija tkzv Početna serija koja ima 26
            položaja i dve vsrte disanja. Vežbanje joge u tako zagrejanim
            prostorijama izaziva jako znojenje pa se veruje da ona oslobađa telo
            od otrova i čini ga fleksibilnim. Postoje i rizici kod takvog
            vežbanja i to počevši od nesvestica usled dehidracije pa preko
            povreda sve do srčanih udara
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px" }}>
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/Ocg3InAEZMU"
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
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[0]}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Sreda",
                    "12:15",
                    "2:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[1]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Petak",
                    "12:15",
                    "2:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[2]}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Ponedeljak",
                    "02:15",
                    "4:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[3]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    4,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Cetvrtak",
                    "02:15",
                    "4:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[4]}
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Utorak",
                    "04:15",
                    "6:00"
                  )
                }
              >
                Bakram Joga,{slMestaBi[5]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Petak",
                    "04:15",
                    "6:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[6]}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Sreda",
                    "06:15",
                    "08:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[7]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    8,
                    setSlMestaBi,
                    slMestaBi,
                    "Bikram ",
                    "Subota",
                    "06:15",
                    "08:00"
                  )
                }
              >
                Bakram Joga, {slMestaBi[8]}
              </th>
            </tr>
          </table>
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
export default BakramJoga;
