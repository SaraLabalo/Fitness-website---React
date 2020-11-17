import React, { useState } from "react";
import image from "../../assets/img/masaza.jpg";
import { FormGroup, Label, Input, FormText, Button } from "reactstrap";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
function Massages(props) {
  const [state, setState] = useState({
    name: "",
    lastName: "",
    email: "",
    date: "",
    text: "",
  });

  const myDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section} style={{ marginTop: "20px" }}>
          <View style={{ textAlign: "center" }}>
            <Text>
              {props.language ? "Zakazivanje Masaze" : "Appointment booking"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text>
              {props.language ? "Ime i Prezime:" : "Name and LastName"}{" "}
              {state.name} {state.lastName}
            </Text>
            <Text>Email:{state.email} </Text>
            <Text>
              {props.language ? "Datum" : "Date"}: {state.date}
            </Text>
            <Text>
              {props.language ? "Opis problema" : "Problem description"}:{" "}
              {state.text}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div class="site-section" style={{ marginTop: "100px" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="mb-5">
              <img src={image} alt="Image" class="img-fluid" />
            </p>
          </div>
          <div class="col-lg-5 ml-auto">
            <h2 class="site-section-heading mb-3">
              {props.language ? "SPORTSKA MASAŽA" : "Sport Massage"}
            </h2>
            <p>
              {props.language
                ? "Sportska masaža se preporučuje sportistima kao i rekreativcima. Postoji nekoliko vrsta sportskih masaža. Masaža koja se izvodi nakon treninga ili dugotrajnog napornog rada mišića sprečava nastanak mlečne kiseline, ili istu otklanja ukoliko je došlo do njenog nagomilavanja. Nakupljena mlečna kiselina se pretvara u kalcifikate, koji mogu da izazovu mišićnu napetost pa čak i bol. Postoje i sportske masaže čija je uloga da saniraju najčešće sportske povrede (bacački lakat, teniski lakat, plivačko rame, skakačko koleno itd.). Ova masaža preporučuje se i kada do povrede nije došlo, nego je mišić umoran, pa masažom treba da se opusti i rastereti. Često se rade i sportske masaže koje služe za pripremu sportiste za takmičenje, utakmicu i sl. Ova masaža opušta periferni nervni sistem i priprema telo za nove napore. Sportskim masažama se poboljšava prokrvljenost mišića, pa je on spremniji za napor koji sledi."
                : "Sports massage is recommended for athletes as well as recreationists. There are several types of sports massages. A massage that is performed after training or long-term hard work of the muscles prevents the formation of lactic acid, or removes it if it has accumulated. Accumulated lactic acid is converted into calcifications, which can cause muscle tension and even pain. There are also sports massages whose role is to repair the most common sports injuries (throwing elbow, tennis elbow, swimming shoulder, jumping knee, etc.). This massage is also recommended when there is no injury, but the muscle is tired, so the massage should relax and relieve it. Sports massages are often done to prepare the athlete for the competition, match, etc. This massage relaxes the peripheral nervous system and prepares the body for new efforts. Sports massages improve blood circulation in the muscles, so he is more ready for the effort that follows."}
            </p>
          </div>
        </div>
      </div>
      <div class="forma">
        <h2 class="site-section-heading mb-3">
          {props.language ? "Rezervacija termina" : "Appointment booking"}
        </h2>
        <form>
          <FormGroup id="pdf-form">
            <Label for="firstName">{props.language ? "Ime" : "Name"}</Label>
            <Input
              type="text"
              name="name"
              id="Name"
              value={state.name}
              onChange={handleOnChange}
              placeholder="Upisite svoje ime"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">
              {props.language ? "Prezime" : "LastName"}
            </Label>
            <Input
              type="text"
              name="lastName"
              id="lastNamed"
              value={state.lastName}
              onChange={handleOnChange}
              placeholder="Upisite svoje Prezime"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              value={state.email}
              id="exampleEmail"
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">{props.language ? "Datum" : "Date"}</Label>
            <Input
              type="date"
              name="date"
              id="date"
              value={state.date}
              onChange={handleOnChange}
              placeholder="Upisite datum zeljenog termina"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">
              {props.language ? "Opis problema" : "Problem description"}
            </Label>
            <Input
              type="textarea"
              onChange={handleOnChange}
              name="text"
              value={state.text}
              id="exampleText"
            />
          </FormGroup>
          {state.name &&
          state.email &&
          state.lastName &&
          state.date &&
          state.text ? (
            <a
              onClick={() =>
                setState({
                  name: "",
                  lastName: "",
                  email: "",
                  date: "",
                  text: "",
                })
              }
            >
              <PDFDownloadLink document={myDocument} fileName="massage.pdf">
                {({ blob, url, loading, error }) => {
                  return loading ? "Loading document..." : "Download now!";
                }}
              </PDFDownloadLink>
            </a>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Massages;
