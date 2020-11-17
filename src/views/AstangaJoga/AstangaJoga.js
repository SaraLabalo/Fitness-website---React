import React from "react";
import image from "../../assets/img/aJoga1.jpg";
import image2 from "../../assets/img/aJoga2.jpg";
import image3 from "../../assets/img/aJoga3.jpg";
import image4 from "../../assets/img/aJoga4.jpg";

/*Copy down*/
import { useState } from "react";
import { Input, Button } from "reactstrap";
import StarRatings from "react-star-ratings";
/*Copy Up*/
function AstangaJoga(props) {
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
  /*Copy Up*/
  const { slMestaAs, setSlMestaAs } = props;

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
            AŠTANGA JOGA
            <StarRatings
              rating={totalRating}
              starRatedColor="blue"
              numberOfStars={6}
              name="rating"
            />
          </h2>
          <p style={{ padding: "10px" }}>
            Znate, to sa jogom zna biti vrlo zapleteno jer je teško uhvatiti šta
            od čega potiče koje šta započeo i šta je ko kako nazvao. Dakle, kada
            smo govorili o Patanđaliju i njegovom sitemu „joge osam udova“, tada
            je bilo reči o dve hiljade godina starom sistemu joge koji se zvao
            Aštanga joga. Kada se danas kaže „aštanga“, najčešće se misli na
            Aštanga-Vinjasa jogu.
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
            src="https://www.youtube.com/embed/1Krp4W0TlAU"
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
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Ponedeljak",
                    "10:15",
                    "12:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[0]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    1,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Sreda",
                    "10:15",
                    "12:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[1]}
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
                    2,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Sreda",
                    "12:15",
                    "02:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[2]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    3,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Petak",
                    "12:15",
                    "02:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[3]}
              </th>
              <th></th>
            </tr>
            <tr>
              <th>02:15-4:00</th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    4,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Utokak",
                    "02:15",
                    "4:00"
                  )
                }
              >
                {" "}
                Aštanga Joga {slMestaAs[4]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    5,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Cetvrtak",
                    "02:15",
                    "4:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[5]}
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
                    6,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Utorak",
                    "04:15",
                    "6:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[6]}
              </th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    7,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Cetvrtak",
                    "04:15",
                    "6:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[7]}
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
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Sreda",
                    "06:15",
                    "08:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[8]}
              </th>
              <th></th>
              <th></th>
              <th
                class="color"
                onClick={() =>
                  props.zakazi(
                    9,
                    setSlMestaAs,
                    slMestaAs,
                    "Astanga",
                    "Subota",
                    "06:15",
                    "08:00"
                  )
                }
              >
                Aštanga Joga {slMestaAs[9]}
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
export default AstangaJoga;
