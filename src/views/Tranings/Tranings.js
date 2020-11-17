import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import bikram from "../../assets/img/bikram.jpg";
import pilates from "../../assets/img/pilates.jpg";
import pump from "../../assets/img/pump.jpg";
import astanga from "../../assets/img/astanga.jpg";
import startit from "../../assets/img/startit.jpg";
import klasicniPi from "../../assets/img/klasicniP.jpg";
import force from "../../assets/img/force.jpg";
import trcanje from "../../assets/img/trcanje.jpg";
import bahkti from "../../assets/img/bahkti.jpg";
import performace from "../../assets/img/performer.jpg";
import core30 from "../../assets/img/core-30.jpg";
import startits from "../../assets/img/startits.jpg";

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
function Trainings(props) {
  useEffect(() => {
    props.language ? setArray(fullArraySrp) : setArray(fullArrayEng);
    props.language ? setFullArray(fullArraySrp) : setFullArray(fullArrayEng);
  }, [props.language]);
  const [fullArray, setFullArray] = useState([]);

  const [fullArraySrp, setFullArray1] = useState([
    {
      type: "Yoga",
      title: "Bikram",
      img: bikram,
      duration: "45min",
      level: "4",
      link: "/bakram-joga",
      text:
        "Bikram jogu je osnovao Bikram Čouduri (vidimo ga na slici sa dvoje vežbača) je „vrela joga“...",
    },
    {
      type: "Pilates",
      title: "Stot",
      img: pilates,
      duration: "55min",
      level: "3",
      link: "/stott-pilates",
      text:
        "STOTT PILATES se može vežbati čitavog života, od detinjstva do duboke starosti...",
    },
    {
      type: "Core",
      title: "Pump",
      img: pump,
      duration: "65min",
      level: "5",
      link: "/pump",
      text:
        "PUMP je originalni trening sa šipkom i tegovima koji oblikuje i jača telo...",
    },
    {
      type: "Cardio",
      title: "Start-it",
      img: startits,
      duration: "35min",
      level: "3",
      link: "/startit",
      text:
        "Start IT treninzi se sastoje od kratkih ali jakih intervala fizičke aktivnosti...",
    },
    {
      type: "Yoga",
      title: "Aštanga",
      img: astanga,
      duration: "45min",
      level: "4",
      link: "/astanga-joga",
      text:
        "Znate, to sa jogom zna biti vrlo zapleteno jer je teško uhvatiti šta od čega potiče..",
    },
    {
      type: "Pilates",
      title: "Klasični",
      img: klasicniPi,
      duration: "35min",
      level: "2",
      link: "/klasican-pilates",
      text:
        "Pilates predstavlja sistem vežbi istezanja tela i snage koji je prije devedese...",
    },
    {
      type: "Core",
      title: "Force",
      img: force,
      duration: "55min",
      level: "4",
      link: "/force-trening",
      text:
        "Core, jezgro ili središte čine mišići oko kukova, trbušni mišići, mišići leđa i ramena...",
    },
    {
      type: "Cardio",
      title: "Trčanje",
      img: trcanje,
      duration: "65min",
      level: "3",
      link: "/running",

      text:
        "Redovnim vežbanjem, trčanjem ćete poboljšati svoje zdravstveno stanje..",
    },
    {
      type: "Yoga",
      title: "Bakiti",
      img: bahkti,
      duration: "60min",
      level: "3",
      link: "/bakiti-joga",
      text:
        "Bakti znači ljubav i predanost Bogu i njegovoj kreaciji, poštovanje i pažnju...",
    },
    {
      type: "Pilates",
      title: "Performer",
      img: performace,
      duration: "120min",
      level: "3",
      link: "/performer-pilates",
      text:
        "Pilates je metoda vežbanja koju je osmislio Joseph Pilates. Sama ideja o reformeru...",
    },
    {
      type: "Core",
      title: "Core-30",
      img: core30,
      duration: "30min",
      level: "5",
      link: "/core30",
      text:
        "Centralne mišićne strukture trupa (eng. core) predstavljaju osnovu svakog pokreta...",
    },
    {
      type: "Cardio",
      title: "Step",
      img: startit,
      duration: "60min",
      level: "2",
      link: "/step-trening",
      text:
        "Step aerobik je koreografski trening sa mnogo koracanja i gibanja, sto daje takodje...",
    },
  ]);
  const [fullArrayEng, setFullArray2] = useState([
    {
      type: "Yoga",
      title: "Bikram",
      img: bikram,
      duration: "45min",
      level: "4",
      link: "/bakram-joga",
      text:
        "Bikram yoga was founded by Bikram Chowdhury (we see him in the picture with two practitioners) is hot yoga ...",
    },
    {
      type: "Pilates",
      title: "Stot",
      img: pilates,
      duration: "55min",
      level: "3",
      link: "/stott-pilates",
      text:
        "STOTT PILATES can be practiced for life, from childhood to old age ...",
    },
    {
      type: "Core",
      title: "Pump",
      img: pump,
      duration: "65min",
      level: "5",
      link: "/pump",
      text:
        "PUMP is an original training with a barbell and weights that shapes and strengthens the body ...",
    },
    {
      type: "Cardio",
      title: "Start-it",
      img: startits,
      duration: "35min",
      level: "3",
      link: "/startit",
      text:
        "Start IT trainings consist of short but strong intervals of physical activity ...",
    },
    {
      type: "Yoga",
      title: "Aštanga",
      img: astanga,
      duration: "45min",
      level: "4",
      link: "/astanga-joga",
      text:
        "You know, it can be very complicated with yoga because it's hard to catch what it comes from.",
    },
    {
      type: "Pilates",
      title: "Klasični",
      img: klasicniPi,
      duration: "35min",
      level: "2",
      link: "/klasican-pilates",
      text:
        "Pilates largely avoids high impact, high power output, and heavy muscular and skeletal loading.",
    },
    {
      type: "Core",
      title: "Force",
      img: force,
      duration: "55min",
      level: "4",
      link: "/force-trening",
      text:
        "The core, core or center consists of the muscles around the hips, abdominal muscles, back and shoulder muscles.",
    },
    {
      type: "Cardio",
      title: "Trčanje",
      img: trcanje,
      duration: "65min",
      level: "3",
      link: "/running",

      text: "By exercising regularly, running, you will improve your health.",
    },
    {
      type: "Yoga",
      title: "Bakiti",
      img: bahkti,
      duration: "60min",
      level: "3",
      link: "/bakiti-joga",
      text:
        "Bakti means love and devotion to God and his creation, respect and attention ...",
    },
    {
      type: "Pilates",
      title: "Performer",
      img: performace,
      duration: "120min",
      level: "3",
      link: "/performer-pilates",
      text:
        "Pilates largely avoids high impact, high power output, and heavy muscular and skeletal loading. The very idea of a reformer ...",
    },
    {
      type: "Core",
      title: "Core-30",
      img: core30,
      duration: "30min",
      level: "5",
      link: "/core30",
      text:
        "The central muscular structures of the trunk (core) are the basis of every movement ...",
    },
    {
      type: "Cardio",
      title: "Step",
      img: startit,
      duration: "60min",
      level: "2",
      link: "/step-trening",
      text:
        "Step aerobics is a choreographic training with a lot of steps and movements, which also gives ...",
    },
  ]);
  const [array, setArray] = useState([]);
  const [reset, setReset] = useState(true);
  React.useEffect(() => {
    props.language ? setArray(fullArraySrp) : setArray(fullArrayEng);
    props.language ? setFullArray(fullArraySrp) : setFullArray(fullArrayEng);
  }, []);

  const filtrirajTip = (type) => {
    var arr = fullArray.filter(function (elem) {
      if (type === elem.type) return true;
      return false;
    });
    console.log(arr);
    setArray(arr);
  };
  const filtrirajTezina = (number) => {
    var arr = fullArray.filter(function (elem) {
      if (number == elem.level) return true;
      return false;
    });
    console.log(arr);
    setArray(arr);
  };
  const sortirajTezina = (type, sort) => {
    var arr;
    if (sort == "level") {
      if (type == "ASC") {
        console.log("usao");
        arr = fullArray.sort((a, b) => (a.level >= b.level ? 1 : -1));
      } else {
        arr = fullArray.sort((a, b) => (a.level <= b.level ? 1 : -1));
      }
    } else {
      if (type == "ASC") {
        console.log("usao");
        arr = fullArray.sort((a, b) => (a.duration >= b.duration ? 1 : -1));
      } else {
        arr = fullArray.sort((a, b) => (a.duration <= b.duration ? 1 : -1));
      }
    }
    setReset(!reset);
    setArray(arr);
  };
  return (
    <div
      style={{ marginTop: "70px", paddingBottom: "20px" }}
      className="allTrainings"
    >
      <div class="container">
        <div class="row">
          <div
            class="heading-with-border text-center mb-5"
            style={{ width: "100%" }}
          >
            <h2 class="heading text-uppercase">
              {props.language ? "Vrste Treninga" : "Type of training"}
            </h2>
          </div>
        </div>
        <div class="row">
          <div className="col-md-3 col-6">
            <UncontrolledDropdown>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="secondary"
                data-toggle="dropdown"
                id="dropdownMenuButton"
                type="button"
              >
                {props.language ? "Tipovi treninga" : "Type of training"}
              </DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuButton">
                <DropdownItem onClick={() => filtrirajTip("Yoga")}>
                  Yoga
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTip("Core")}>
                  Core
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTip("Pilates")}>
                  Pilates
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTip("Cardio")}>
                  Cardio
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <div className="col-md-3 col-6">
            <UncontrolledDropdown>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="secondary"
                data-toggle="dropdown"
                id="dropdownMenuButton"
                type="button"
              >
                {props.language ? "Sortiraj po dezini" : "Sorting"}
              </DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuButton">
                <DropdownItem onClick={() => sortirajTezina("ASC", "level")}>
                  Asc
                </DropdownItem>
                <DropdownItem onClick={() => sortirajTezina("DESC", "level")}>
                  Desc
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="col-md-3 col-6">
            <UncontrolledDropdown>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="secondary"
                data-toggle="dropdown"
                id="dropdownMenuButton"
                type="button"
              >
                {props.language ? "Nivo tezine" : "Level"}
              </DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuButton">
                <DropdownItem onClick={() => filtrirajTezina(2)}>
                  2
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTezina(3)}>
                  3
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTezina(4)}>
                  4
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTezina(5)}>
                  5
                </DropdownItem>
                <DropdownItem onClick={() => filtrirajTezina(6)}>
                  6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="col-md-3 col-6">
            <UncontrolledDropdown>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="secondary"
                data-toggle="dropdown"
                id="dropdownMenuButton"
                type="button"
              >
                {props.language
                  ? "Sortiraj po trajanju"
                  : "Sorting by duration"}
              </DropdownToggle>
              <DropdownMenu aria-labelledby="dropdownMenuButton">
                <DropdownItem onClick={() => sortirajTezina("ASC", "Duration")}>
                  Asc
                </DropdownItem>
                <DropdownItem
                  onClick={() => sortirajTezina("DESC", "Duration")}
                >
                  Desc
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
        <div class="row rowAllTraining">
          {array.map((item) => {
            return (
              <div class="col-md-3" style={{ marginBottom: "20px" }}>
                <div class="media-image">
                  <img src={item.img} alt="Image" class="img-fluid" />
                  <div class="media-image-body">
                    <h2>{item.title}</h2>
                    <p>
                      {props.language ? "Trajanje" : "Duration"}:{item.duration}
                    </p>
                    <p>
                      {props.language ? "Nivo" : "Level"}: {item.level}
                    </p>
                    <p>{item.text}</p>
                    <p className="text-center mt-3">
                      <a
                        onClick={() => {
                          props.history.push(item.link);
                        }}
                        class="btn btn-primary text-white px-4"
                      >
                        <span class="caption">
                          {props.language ? "Detaljno" : "Detail"}
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Trainings);
