import React from "react";
import { Container, Row, Col } from "react-grid-system";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";
import iconBook from "./images/icon-book.png";
import iconClipboard from "./images/icon-clipboard.png";
import iconMonitor from "./images/icon-monitor.png";
import iconPaperTooth from "./images/icon-paper-tooth.png";
import iconTooth from "./images/icon-tooth.png";

import Text from "../../components/Text";
import Animate from "../../components/Animate";

const UsServices = () => {
  return (
    <article id={"Nossos-Serviços"} className={"UsServices"}>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={5} offset={{ md: 4.5 }}>
            <Animate offset={0} delay={200} animate="fadeInDown">
              <Text color="primary" hr>
                <h1>Nossos Serviços</h1>
              </Text>
            </Animate>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} offset={{ md: 1 }}>
            <Row>
              <Col xs={12} md={6}>
                <div className={"UsServices__header"}>
                  <Animate offset={0} delay={400 * 1} animate="bounceIn">
                    <img
                      className={"UsServices__header__icon"}
                      src={iconPaperTooth}
                      draggable={false}
                      alt={"Ícone Radiografias Panorâmicas"}
                    />
                  </Animate>
                  <Animate offset={0} delay={200 * 1} animate="fadeIn">
                    <Text>
                      <h4>
                        <strong>Radiografias Panorâmicas</strong>
                      </h4>
                    </Text>
                  </Animate>
                </div>
                <Animate offset={0} delay={200 * 1} animate="fadeInUp">
                  <ul className={"UsServices__list"}>
                    <li>Laudo e traçado anatômico para implante</li>
                  </ul>
                </Animate>
              </Col>
              <Col xs={12} md={6}>
                <div className={"UsServices__header"}>
                  <Animate offset={0} delay={400 * 2} animate="bounceIn">
                    <img
                      className={"UsServices__header__icon"}
                      src={iconClipboard}
                      draggable={false}
                      alt={"Ícone Análises de Telerradiografia"}
                    />
                  </Animate>
                  <Animate offset={0} delay={200 * 2} animate="fadeIn">
                    <Text>
                      <h4>
                        <strong>Análises de Telerradiografia</strong>
                      </h4>
                    </Text>
                  </Animate>
                </div>
                <Animate offset={0} delay={200 * 2} animate="fadeInUp">
                  <ul className={"UsServices__list"}>
                    <li>Cefalometria</li>
                    <li>Idade Óssea</li>
                  </ul>
                </Animate>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <div className={"UsServices__header"}>
                  <Animate offset={0} delay={400 * 1} animate="bounceIn">
                    <img
                      className={"UsServices__header__icon"}
                      src={iconMonitor}
                      draggable={false}
                      alt={"Ícone Laudo de Radiografias"}
                    />
                  </Animate>
                  <Animate offset={0} delay={200 * 1} animate="fadeIn">
                    <Text>
                      <h4>
                        <strong>Laudo de Radiografias</strong>
                      </h4>
                    </Text>
                  </Animate>
                </div>
                <Animate offset={0} delay={200 * 1} animate="fadeInUp">
                  <ul className={"UsServices__list"}>
                    <li>Periapicais </li>
                    <li>Interproximais</li>
                    <li>Oclusais</li>
                  </ul>
                </Animate>
              </Col>
              <Col xs={12} md={6}>
                <div className={"UsServices__header"}>
                  <Animate offset={0} delay={400 * 2} animate="bounceIn">
                    <img
                      className={"UsServices__header__icon"}
                      src={iconBook}
                      draggable={false}
                      alt={"Ícone Montagem de Templates e Laudos Tomograficos"}
                    />
                  </Animate>
                  <Animate offset={0} delay={200 * 2} animate="fadeIn">
                    <Text>
                      <h4>
                        <strong>
                          Montagem de Templates <br />e Laudos Tomográficos
                        </strong>
                      </h4>
                    </Text>
                  </Animate>
                </div>
                <Animate offset={0} delay={200 * 2} animate="fadeInUp">
                  <ul className={"UsServices__list"}>
                    <li>Avaliação de ATM</li>
                    <li>Avaliação Ortodôntica</li>
                    <li>Dentes Inclusos</li>
                    <li>Planejamento de Implantes</li>
                    <li>Lesões Patológicas</li>
                  </ul>
                </Animate>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} offset={{ md: 3 }}>
                <div className={"UsServices__header"}>
                  <Animate offset={0} delay={400 * 1} animate="bounceIn">
                    <img
                      className={"UsServices__header__icon"}
                      src={iconTooth}
                      draggable={false}
                      alt={"Ícone Conversão de Software para planejamentos"}
                    />
                  </Animate>
                  <Animate offset={0} delay={200 * 1} animate="fadeIn">
                    <Text>
                      <h4>
                        <strong>
                          Conversão de Software <br />
                          para planejamentos
                        </strong>
                      </h4>
                    </Text>
                  </Animate>
                </div>
                <Animate offset={0} delay={200 * 1} animate="fadeInUp">
                  <ul className={"UsServices__list"}>
                    <li>Dental Slice</li>
                    <li>Implant Viewer</li>
                  </ul>
                </Animate>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default UsServices;
