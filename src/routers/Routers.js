import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "components/Navbars/NavBar";
import Footer from "../components/Footers/FooterBlack";
// pages

import ErrorPage404 from "views/ErrorPages/404ErrorPage/404ErrorPage";
import LandingPage from "views/LandingPage/LandingPage";
import ContactPage from "views/ContactPage/ContactPage";
import AboutUs from "views/AboutUsPage/AboutUsPage";
import Pilates from "views/Pilates/Pilates";
import Yoga from "views/Yoga/Yoga";
import Core from "views/Core/Core";
import Cardio from "views/Cardio/Cardio";
import Tranings from "views/Tranings/Tranings";
import Nutritionist from "views/Nutritionist/Nutritionist";
import BakramJoga from "views/BakramJoga/BakramJoga";
import Massages from "views/Massages/Massages";
import AstangaJoga from "views/AstangaJoga/AstangaJoga";
import BakitiJoga from "views/BakitiJoga/BakitiJoga";
import StartIt from "views/StartIt/StartIt";
import Running from "views/Running/Running";
import StepTrening from "views/StepTrening/StepTrening";
import Pump from "views/Pump/Pump";
import ForceTrening from "views/ForceTrening/ForceTrening";
import Core30 from "views/Core30/Core30";
import StottPilates from "views/StottPilates/StottPilates";
import KlasicanPilates from "views/KlasicanPilates/KlasicanPilates";
import PerformerPilates from "views/PerformerPilates/PerformerPilates";
import Profile from "views/Profil/Profil";
import ScrollToTop from "../components/Sroll/Scroll";
function AppRouters(props) {
  const [language, setLanguage] = useState(true);
  const [english, setEnglish] = useState({
    pocetnaYoga: "Yoga",
    text2: "",
  });
  const [mojiTermini, setMojiTermini] = useState([]);
  React.useEffect(() => {}, []);

  //zakazivanje
  const [reset, setReset] = useState(true);
  const [slMestaAs, setSlMestaAs] = useState([1, 5, 4, 2, 8, 9, 2, 5, 8, 1]);
  const [slMestaBa, setSlMestaBa] = useState([1, 5, 4, 2, 8, 9, 2, 5, 8]);
  const [slMestaBi, setSlMestaBi] = useState([5, 3, 1, 2, 6, 2, 3, 3, 4]);

  const [slMestaPu, setSlMestaPu] = useState([1, 5, 3, 7, 9, 4, 2, 6, 8, 1]);
  const [slMestaFo, setSlMestaFo] = useState([5, 7, 6, 3, 4, 9, 8, 7, 4, 5, 7]);
  const [slMestaCo, setSlMestaCo] = useState([1, 6, 5, 7, 9, 8, 2, 1, 4, 5]);

  const [slMestaSt, setSlMestaSt] = useState([1, 6, 5, 7, 9, 8, 2, 1, 4, 5]);
  const [slMestaCl, setSlMestaCl] = useState([1, 6, 5, 7, 9, 8, 2, 1, 4, 5]);
  const [slMestaPe, setSlMestaPe] = useState([1, 6, 5, 7, 9, 8, 2, 1, 4]);

  const [slMestaSta, setSlMestaSta] = useState([1, 6, 5, 7, 9, 8, 2]);
  const [slMestaRu, setSlMestaRu] = useState([1, 2, 3, 5, 4, 3, 2, 6]);
  const [slMestaSte, setSlMestaSte] = useState([1, 2, 3, 5, 4, 3, 2, 6, 9]);

  const zakazi = (index, set, value, type, day, timeFrom, timeTo) => {
    if (value[index] != 0) {
      let newArr = value; // copying the old datas array
      newArr[index] = newArr[index] - 1;
      console.log(newArr);
      set(newArr);
      setReset(!reset);
      var obj = {
        index,
        set,
        value,
        type,
        day,
        timeFrom,
        timeTo,
      };
      var arr = [{}];
      console.log(mojiTermini);
      arr = mojiTermini;
      arr.push(obj);
      setMojiTermini(arr);
    }
  };
  return (
    <div>
      <NavBar language={language} setLanguage={setLanguage} />
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/kontakt"
          render={(props) => (
            <ContactPage {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              setReset={setReset}
              reset={reset}
              mojiTermini={mojiTermini}
              setMojiTermini={setMojiTermini}
              language={language}
            />
          )}
        />
        <Route
          path="/o-nama"
          render={(props) => (
            <AboutUs {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/pilates"
          render={(props) => (
            <Pilates {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/yoga"
          render={(props) => (
            <Yoga {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/core"
          render={(props) => (
            <Core {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/cardio"
          render={(props) => (
            <Cardio {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/traning"
          render={(props) => (
            <Tranings {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/bakram-joga"
          render={(props) => (
            <BakramJoga
              {...props}
              slMestaBi={slMestaBi}
              setSlMestaBi={setSlMestaBi}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/nutritionist"
          render={(props) => (
            <Nutritionist {...props} language={language} english={english} />
          )}
        />
        <Route
          path="/massages"
          render={(props) => <Massages {...props} language={language} />}
          english={english}
        />
        <Route path="/massages" render={(props) => <Massages {...props} />} />
        <Route
          path="/astanga-joga"
          render={(props) => (
            <AstangaJoga
              {...props}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
              slMestaAs={slMestaAs}
              setSlMestaAs={setSlMestaAs}
            />
          )}
        />
        <Route
          path="/bakiti-joga"
          render={(props) => (
            <BakitiJoga
              {...props}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
              slMestaBa={slMestaBa}
              setSlMestaBa={setSlMestaBa}
            />
          )}
        />
        <Route
          path="/startit"
          render={(props) => (
            <StartIt
              {...props}
              slMestaSta={slMestaSta}
              setSlMestaSta={setSlMestaSta}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/running"
          render={(props) => (
            <Running
              {...props}
              slMestaRu={slMestaRu}
              setSlMestaRu={setSlMestaRu}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/step-trening"
          render={(props) => (
            <StepTrening
              {...props}
              slMestaSte={slMestaSte}
              setSlMestaSte={setSlMestaSte}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/pump"
          render={(props) => (
            <Pump
              {...props}
              slMestaPu={slMestaPu}
              setSlMestaPu={setSlMestaPu}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/force-trening"
          render={(props) => (
            <ForceTrening
              {...props}
              slMestaFo={slMestaFo}
              setSlMestaFo={setSlMestaFo}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/core30"
          render={(props) => (
            <Core30
              {...props}
              slMestaCo={slMestaCo}
              setSlMestaCo={setSlMestaCo}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
          setMojiTermini={setMojiTermini}
        />
        <Route
          path="/stott-pilates"
          render={(props) => (
            <StottPilates
              {...props}
              slMestaSt={slMestaSt}
              setSlMestaSt={setSlMestaSt}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/klasican-pilates"
          render={(props) => (
            <KlasicanPilates
              {...props}
              slMestaCl={slMestaCl}
              setSlMestaCl={setSlMestaCl}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
        <Route
          path="/performer-pilates"
          render={(props) => (
            <PerformerPilates
              {...props}
              slMestaPe={slMestaPe}
              setSlMestaPe={setSlMestaPe}
              zakazi={zakazi}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />

        <Route
          render={(props) => (
            <ErrorPage404
              {...props}
              setMojiTermini={setMojiTermini}
              mojiTermini={mojiTermini}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default AppRouters;
