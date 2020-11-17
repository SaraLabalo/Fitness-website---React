import React from "react";
import image from "../../assets/img/core301.jpg";
import image2 from "../../assets/img/core302.jpg";
import image3 from "../../assets/img/core303.jpg";
import image4 from "../../assets/img/core304.png";

/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function Core30(props) {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);
  const { slMestaCo, setSlMestaCo, zakazi } = props;
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
            CORE30 TRENING
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            Centralne mišićne strukture trupa (eng. core) predstavljaju osnovu
            svakog pokreta One stabilizuju kičmeni stub, grudni koš i karlicu
            prilikom kretanja. Imaju i ključnu ulogu u svakodnevnim biološkim
            aktivnostima čoveka – stvaraju pritisak u trbušnoj duplji, drže
            unutrašnje organe na svom mestu i pomažu prilikom udisanja i
            izdisanja, kao i prilikom porođaja ili napora pri izbacivanja
            telesnog otpada. Mišići trupa su od ključne važnosti ne samo za
            izgled i snagu tela, već imaju i snažan uticaj na kvalitet života
            povezan sa zdravljem.
            <br />
            Ispunjena detaljnim instrukcijama i razumljivim programima za svaki
            nivo fizičke forme, za razvoj snažnijih centralnih mišićnih
            struktura (core) namenjen i ženama i muškarcima, bez obzira na
            starosnu dob, kao i osobama sa specifičnim potrebama poput trudnica,
            dece u razvoju koja pate od problema sa držanjem tela i
            rekonvalescenata.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/dJlFmxiL11s"
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
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Ponedeljak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Core30 trening,{slMestaCo[0]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Core30 trening, ,{slMestaCo[1]}{" "}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Subota",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Core30 trening,{slMestaCo[2]}{" "}
              </th>
            </tr>
            <tr>
              <th>12:15-2:00</th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Utorak",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Core30 trening,{slMestaCo[3]}{" "}
              </th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    4,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Sreda",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Core30 trening,{slMestaCo[4]}{" "}
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Cetvrtak",
                    "02:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Core30 trening, {slMestaCo[5]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Subota",
                    "02:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Core30 trening, {slMestaCo[6]}{" "}
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
                    7,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Sreda",
                    "04:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Core30 trening, {slMestaCo[7]}{" "}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    8,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Sibota",
                    "04:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Core30 trening , {slMestaCo[8]}{" "}
              </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    9,
                    setSlMestaCo,
                    slMestaCo,
                    "Core ",
                    "Ponedeljak",
                    "06:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Core30 trening, {slMestaCo[9]}{" "}
              </th>
              <th></th>
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
export default Core30;
