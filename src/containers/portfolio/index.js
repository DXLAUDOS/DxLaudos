import React from "react";
import { Col, Container, Row } from "react-grid-system";

import "./index.scss";
import img01 from "./images/img01.jpeg";
import img02 from "./images/img02.jpeg";
import img03 from "./images/img03.jpeg";
import img04 from "./images/img04.jpeg";
import img05 from "./images/img05.jpeg";
import img06 from "./images/img06.jpeg";
import img07 from "./images/img07.jpeg";
import img08 from "./images/img08.jpeg";
import img09 from "./images/img09.jpeg";
import img10 from "./images/img10.jpeg";
import img11 from "./images/img11.jpeg";
import img12 from "./images/img12.jpeg";

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
