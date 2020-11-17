import React from "react";
import image from "../../assets/img/running1.png";
import image2 from "../../assets/img/running2.jpg";
import image3 from "../../assets/img/running3.jpg";
import image4 from "../../assets/img/running4.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function Running(props) {
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
  const { slMestaRu, setSlMestaRu } = props;
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
            RUNNING TRENING
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            Redovnim vežbanjem, odnosno trčanjem ne samo da ćete poboljšati
            svoje zdravstveno stanje, uticati na smanjenje kilograma i
            oblikovati vašu mišićnu masu, već ćete se i znatno bolje osećati i
            biti privlačniji pripadnicama lepšeg pola.
            <br /> Pre svega dajte seb vremena, kako biste stekli izdržljivost i
            bili u mogućnosti da pravilno trčite i dišete pri tom, jer
            nepravilno disanje zapravo je razlog zašto se zadišemo i ne možemo
            da dođemo do sada kada se konačno zaustavimo. Bolovi koje ćete u
            početku osećati znak su da ste predugo sedeli na krevetu i bili
            neaktvni. Isti će vas nagovarati da odustanete ali znajte da su oni
            samo pokazatelj toga da se vaše telo suočava sa pozitivnim
            promenama. Dakle, krenite laganim korakom. Kada osetite bol,
            usporite, pre nego što se potpuno zaustavite. Odmoite na kratko i
            kada povratite snagu krenite ponovo.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/n4I_fmegTRk"
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
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    0,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Utorak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[0]}
              </th>
              <th></th>
              <th></th>
              <th></th>
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
                    1,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Cetvrtak",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[1]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Subota",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[2]}
              </th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Ponedeljak",
                    "2:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[3]}
              </th>
              <th></th>
              <th></th>
              <th></th>
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
                    4,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Utorak",
                    "4:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[4]}
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Subota",
                    "4:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[5]}
              </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Sreda",
                    "6:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[6]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaRu,
                    slMestaRu,
                    "Running",
                    "Petak",
                    "6:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Running{slMestaRu[7]}
              </th>
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
export default Running;
