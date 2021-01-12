import React from "react";
import { Col, Container, Row } from "react-grid-system";

import "./index.scss";
import img01 from "./images/img01.jpg";
import img02 from "./images/img02.jpg";
import img03 from "./images/img03.jpg";
import img04 from "./images/img04.jpg";
import img05 from "./images/img05.jpg";
import img06 from "./images/img06.jpg";
import img07 from "./images/img07.jpg";
import img08 from "./images/img08.jpg";
import img09 from "./images/img09.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";

import Carousel from "../../components/Carousel";
import Animate from "../../components/Animate";
import Text from "../../components/Text";

const Portfolio = () => {
  const carouselImgs = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  return (
    <article id={"Portfólio"} className={"Portfolio"}>
      <Container>
        <Row>
          <Col xs={12} md={3} offset={{ md: 5 }}>
            <Animate delay={200} animate="fadeInDown">
              <Text color="primary" hr>
                <h1>Portfólio</h1>
              </Text>
            </Animate>
          </Col>
          <Col xs={12}>
            <Animate delay={200} animate="fadeIn">
              <Carousel photos={carouselImgs} />
            </Animate>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Portfolio;
