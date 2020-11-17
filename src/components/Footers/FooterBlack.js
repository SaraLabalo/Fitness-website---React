import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function FooterBlack() {
  return (
    <div
      className="footer footer-black "
      style={{
        backgroundColor: "black",
        bottom: "0px",
        width: "100%",
      }}
    >
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © Copyright 2020, имена аутора, Одсек за софтверско инжењерство
              Електротехничког факултета Универзитета у Београду
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default FooterBlack;
