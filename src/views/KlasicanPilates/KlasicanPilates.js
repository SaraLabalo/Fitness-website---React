import React from "react";
import image from "../../assets/img/pilates1.jpg";
import image2 from "../../assets/img/pilates2.jpg";
import image3 from "../../assets/img/pilates3.jpg";
import image4 from "../../assets/img/pilates4.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function KlasicanPilates(props) {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);
  const { slMestaCl, setSlMestaCl, zakazi } = props;
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
            KLASICAN PILATES
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            Pilates predstavlja sistem vežbi istezanja tela i snage koji je
            prije devedeset godina razvio Joseph H. Pilates.
            <br /> Pilatesom se jačaju i oblikuju mišići, ispravlja se drzanje
            tela, daje gipkost, poboljšava ravnoteža, te usavršava oblik tela.
            <br />
            <br />
            Pilates je razvijen da bi se njime stvorilo zdravo telo, zdrav um i
            zdrav zivot. Pilates filozofija usmerena je na uvežbavanje tela i
            uma da deluju zajedno prema ostvarenju sveukupne telesne kondicije.
            Iako je rođen u znatno mirnijem vremenu nego što je današnje,
            J.Pilates je razumeo u kolikoj meri dnevni raspored opterecuje telo
            i um, te je težio promeniti naše ponašanje kako bismo pri vežbanju
            imali na umu učinkovitost u obavljanju svakodnevnih zadataka.
            <br />
            Vežbe pilatesa ne zahtevaju nikakvu opremu i mogu se izvoditi u
            svakom prostoru gdje se telo može udobno ispružiti.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350px"
            src="https://www.youtube.com/embed/OC5U5hazdY4"
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
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Ponedeljak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[0]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[1]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "SUbota",
                    "10:15",
                    "12:00"
                  )
                }
              >
                Klasican pilates,{slMestaCl[2]}
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
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Utorak",
                    "12:15",
                    "2:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[3]}
              </th>
              <th></th>
              <th></th>
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
                    4,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Utorak",
                    "2:15",
                    "4:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[4]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Cetvrtak",
                    "2:15",
                    "4:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[5]}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Ponedeljka",
                    "4:15",
                    "6:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[6]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Cetvrtak",
                    "4:15",
                    "6:00"
                  )
                }
              >
                Klasican pilates,{slMestaCl[7]}
              </th>
              <th></th>
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
                    8,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Sreda",
                    "6:15",
                    "8:00"
                  )
                }
              >
                Klasican pilates, {slMestaCl[8]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    9,
                    setSlMestaCl,
                    slMestaCl,
                    "Klasicni ",
                    "Subota",
                    "6:15",
                    "8:00"
                  )
                }
              >
                Klasican pilates,{slMestaCl[9]}
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
export default KlasicanPilates;
