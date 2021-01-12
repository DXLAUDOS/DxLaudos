import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import imgMain from "./images/PhotoMain.png";
import imgMainS from "./images/PhotoMainS.png";

import Animate from "../../components/Animate";
import Text from "../../components/Text";

const Presentation = () => {
  return (
    <article className={"Presentation"} id={"DxLaudos"}>
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <Animate delay={1200} animate="fadeInDown">
              <Text color="primary" hr>
                <h1>Alto padrão em Laudos 2D e 3D na Odontologia.</h1>
              </Text>
            </Animate>
            <Row>
              <Col xs={12} md={10}>
                <Animate delay={1400} animate="fadeIn">
                  <Text className="align-justify">
                    <h4>
                      A <strong>DX Laudos</strong> criou um atendimento que
                      oferece o serviço de laudo a distância com toda a
                      possibilidade de seus clientes personalizarem o formato
                      que desejam receber seus serviços.
                    </h4>
                  </Text>
                </Animate>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className={"Presentation__SaibaMais"}>
        <Animate delay={1600} offset={0} animate="fadeInUp">
          <a href={"#Sobre-a-Empresa"}>
            <Text align="center" color="primary">
              <h5>Saiba Mais</h5>
              <FontAwesomeIcon
                className={"animated fadeInDown slower infinite"}
                style={{ animationDuration: "2s" }}
                color={"var(--primary)"}
                icon={faAngleDown}
                size={"lg"}
              />
            </Text>
          </a>
        </Animate>
      </div>
      <div className={"Presentation__Image"}>
        <Col md={5} offset={{ md: 7 }}>
          <div className={"Presentation__Image__S"}>
            <Animate delay={1200} animate="fadeInDown">
              <img
                src={imgMainS}
                alt={"DX Laudos Silhueta"}
                draggable={false}
              />
            </Animate>
          </div>
          <Animate delay={1700} animate="fadeInDown">
            <img src={imgMain} alt={"DX Laudos - Home"} draggable={false} />
          </Animate>
        </Col>
      </div>
    </article>
  );
};

export default Presentation;
