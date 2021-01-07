import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import Text from "../../components/Text";

import imgMain from "./images/PhotoMain.png";
import imgMainS from "./images/PhotoMainS.png";
const Presentation = () => {
  return (
    <article className={"Presentation"} id={"DxLaudos"}>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Text color="primary" hr>
              <h1>
                Alto padrão em Laudos 2D e 3D <br /> na Odontologia.
              </h1>
            </Text>
            <Row>
              <Col xs={12} md={8}>
                <Text className="align-justify">
                  <h4>
                    A <strong>DX Laudos</strong> criou um atendimento que
                    oferece o serviço de laudo a distância com toda a
                    possibilidade de seus clientes personalizarem o formato que
                    desejam receber seus serviços.
                  </h4>
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={"Presentation__SaibaMais"}>
              <Text align="center" color="primary">
                <h4>Saiba Mais</h4>
                <FontAwesomeIcon
                  color={"var(--primary)"}
                  icon={faAngleDown}
                  size={"lg"}
                />
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={"Presentation__Image"}>
        <Col md={5} offset={{ md: 7 }}>
          <div className={"Presentation__Image__S"}>
            <img src={imgMainS} alt={"DX Laudos Silhueta"} draggable={false} />
          </div>
          <img src={imgMain} alt={"DX Laudos - Home"} draggable={false} />
        </Col>
      </div>
    </article>
  );
};

export default Presentation;
