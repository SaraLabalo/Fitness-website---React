import React, { useState } from "react";
import image from "../../assets/img/nutrition.jpg";
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

function Nutritionist(props) {
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
              {props.language
                ? "Zakazivanje Nutricioniste"
                : "Appointment booking"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text>
              {props.language ? "Ime Prezime" : "Name And LastName"}{" "}
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
              {" "}
              {props.language ? "Nutricionista" : "Nutritions"}
            </h2>
            <p>
              {props.language
                ? " Nutricionista je tu da vam pomogne da na zdrav i bezbedan način dostignete željene ciljeve i transformišete svoje telo. Internet je prepun mahom štetnih i neefikasnih dijeta koje dovode do jo-jo efekta, i u najgorem slučaju, značajnog pogoršanja vašeg zdravlja. Svaka osoba koja se obrati nutricionisti za pomoć dobiće posebni tretman, i plan ishrane koji odgovara njihovim fitnes ciljevima, i fizičkom zdravlju. Osobe sa zdravstvenim problemima ko što je fijabetes ili visok krvni pritisak moraju posebno da vode računa o ishrani, i nutricionista za svaku osobu ponaosob osmišljava adekvatni plan ishrane koji će, u kombinaciji sa treningom, dovesti do željene transformacije tela i pre svega, zdravog i srećnijeg života. Uostalom, neadekvatna ishrana bogata trans masnim kiselinama I šećerima može izazvati niz zdravstvenih problema."
                : "The nutritionist is there to help you achieve your desired goals in a healthy and safe way and transform your body. The Internet is full of mostly harmful and ineffective diets that lead to a yo-yo effect, and in the worst case, a significant deterioration in your health. Every person who turns to nutritionists for help will receive special treatment, and a diet plan that suits their fitness goals, and physical health. People with health problems such as diabetes or high blood pressure must take special care of their diet, and the nutritionist devises an adequate diet plan for each person, which, in combination with training, will lead to the desired transformation of the body and, above all, a healthier and happier of life. After all, an inadequate diet rich in trans fatty acids and sugars can cause a number of health problems."}
            </p>
          </div>
        </div>
      </div>
      <div class="forma">
        <h2 class="site-section-heading mb-3">
          {" "}
          {props.language ? "Rezervacija" : "Booking"}
        </h2>
        <form>
          <FormGroup id="pdf-form">
            <Label for="firstName"> {props.language ? "Ime" : "Name"}</Label>
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
              {props.language ? "Prezime" : "Lastname"}
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
              {props.language ? "Problem" : "Problem description"}
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
              <PDFDownloadLink
                document={myDocument}
                fileName="nutricionista.pdf"
              >
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

export default Nutritionist;
