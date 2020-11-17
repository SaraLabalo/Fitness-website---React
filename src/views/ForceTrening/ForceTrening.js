import React from "react";
import image from "../../assets/img/pump1.jpg";
import image2 from "../../assets/img/pump2.jpg";
import image3 from "../../assets/img/pump1.jpg";
import image4 from "../../assets/img/pump2.jpg";
/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function ForceTrening(props) {
  /*Copy down*/
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const [uk, setUk] = useState(1);
  const { slMestaFo, setSlMestaFo, zakazi } = props;
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
            FORCE TRENING
          </h2>
          <StarRatings
            rating={totalRating}
            starRatedColor="blue"
            numberOfStars={6}
            name="rating"
          />
          <p style={{ padding: "10px" }}>
            Core, jezgro ili središte čine mišići oko kukova, trbušni mišići,
            mišići leđa i ramena. Ovi mišići funkcionišu kao jedna snažna
            celina. Mišiće jezgra možemo podeliti u grupe. Prvu grupu čine
            duboki mišići leđa i stomaka. Ovi mišići se nalaze blizu kičme i
            njihova funkcija je da pružaju potporu kičmi, kao na primer kada
            mirno stojimo. U drugu grupu spadaju površinski mišići stomaka i
            leđa. Površinski trbušni mišići kontrolišu položaj karlice i rebara
            i omogućavaju nam da rotiramo i savijamo trup prema napred. U ovu
            grupu spadaju i površni leđni mišići koji vrše opružanje trupa. Dok
            hodamo ili trčimo, na primer, sposobnost da stabilizujemo karlicu
            omogućava nam da efikasnije koristimo mišiće nogu. Treću grupu čine
            mišići i vezivna tkiva koja omogućavaju da se snaga prenese sa
            donjih na gornje ekstremitete.
          </p>
        </div>
        <div class="col-lg-6 " style={{ margin: "40px", paddingLeft: "10px" }}>
          <iframe
            width="80%"
            height="350"
            src="https://www.youtube.com/embed/Og_fwcOzAmE"
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
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Ponedeljak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Force trening,{slMestaFo[0]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Force trening,{slMestaFo[1]}{" "}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    2,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Subota",
                    "10:15",
                    "12:00"
                  )
                }
              >
                {" "}
                Force trening ,{slMestaFo[2]}{" "}
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
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Subota",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Force trening,,{slMestaFo[3]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    4,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Subota",
                    "12:15",
                    "2:00"
                  )
                }
              >
                {" "}
                Force trening,{slMestaFo[4]}{" "}
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
                    5,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Sreda",
                    "02:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Force trening, {slMestaFo[5]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    6,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Petak",
                    "02:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Force trening, {slMestaFo[6]}{" "}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>04:15-6:00</th>
              <th></th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Cetvrtak",
                    "04:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Force trening, {slMestaFo[7]}{" "}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    8,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Subota",
                    "04:15",
                    "6:00"
                  )
                }
              >
                {" "}
                Force trening, {slMestaFo[8]}{" "}
              </th>
            </tr>
            <tr>
              <th>06:15-08:00</th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    9,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Ponedeljak",
                    "06:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Force trening, {slMestaFo[9]}{" "}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    10,
                    setSlMestaFo,
                    slMestaFo,
                    "Force ",
                    "Cetvrtak",
                    "06:15",
                    "8:00"
                  )
                }
              >
                {" "}
                Force trening, {slMestaFo[10]}{" "}
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
export default ForceTrening;
