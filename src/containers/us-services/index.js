import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";
import iconBook from "./images/icon-book.png";
import iconClipboard from "./images/icon-clipboard.png";
import iconMonitor from "./images/icon-monitor.png";
import iconPaperTooth from "./images/icon-paper-tooth.png";
import iconTooth from "./images/icon-tooth.png";

import Text from "../../components/Text";

const UsServices = () => {
  return (
    <article id={"Nossos-Serviços"} className={"UsServices"}>
      <Container>
        <Row>
          <Col sm={12} md={4} offset={{ md: 4.5 }}>
            <ScrollAnimation offset={0} delay={200} animateIn="fadeInDown">
              <Text color="primary" hr>
                <h1>Nossos Serviços</h1>
              </Text>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={10} offset={{ md: 1 }}>
            <Row>
              <Col sm={12} md={6}>
                <div className={"UsServices__header"}>
                  <ScrollAnimation
                    offset={0}
                    delay={400 * 1}
                    animateIn="bounceIn"
                  >
                    <img
                      className={"UsServices__header__icon"}
                      src={iconPaperTooth}
                      draggable={false}
                      alt={"Icone Radiografias Panorâmicas"}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    offset={0}
                    delay={200 * 1}
                    animateIn="fadeIn"
                  >
                    <Text>
                      <h4>
                        <strong>Radiografias Panorâmicas</strong>
                      </h4>
                    </Text>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation
                  offset={0}
                  delay={200 * 1}
                  animateIn="fadeInUp"
                >
                  <ul className={"UsServices__list"}>
                    <li>Laudo e traçado anatômico para implante</li>
                  </ul>
                </ScrollAnimation>
              </Col>
              <Col sm={12} md={6}>
                <div className={"UsServices__header"}>
                  <ScrollAnimation
                    offset={0}
                    delay={400 * 2}
                    animateIn="bounceIn"
                  >
                    <img
                      className={"UsServices__header__icon"}
                      src={iconClipboard}
                      draggable={false}
                      alt={"Icone Análises de Telerradiografia"}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    offset={0}
                    delay={200 * 2}
                    animateIn="fadeIn"
                  >
                    <Text>
                      <h4>
                        <strong>Análises de Telerradiografia</strong>
                      </h4>
                    </Text>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation
                  offset={0}
                  delay={200 * 2}
                  animateIn="fadeInUp"
                >
                  <ul className={"UsServices__list"}>
                    <li>Cefalometria</li>
                    <li>Idade Óssea</li>
                  </ul>
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <div className={"UsServices__header"}>
                  <ScrollAnimation
                    offset={0}
                    delay={400 * 1}
                    animateIn="bounceIn"
                  >
                    <img
                      className={"UsServices__header__icon"}
                      src={iconMonitor}
                      draggable={false}
                      alt={"Icone Laudo de Radiografias"}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    offset={0}
                    delay={200 * 1}
                    animateIn="fadeIn"
                  >
                    <Text>
                      <h4>
                        <strong>Laudo de Radiografias</strong>
                      </h4>
                    </Text>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation
                  offset={0}
                  delay={200 * 1}
                  animateIn="fadeInUp"
                >
                  <ul className={"UsServices__list"}>
                    <li>Periapicais </li>
                    <li>Interproximais</li>
                    <li>Oclusais</li>
                  </ul>
                </ScrollAnimation>
              </Col>
              <Col sm={12} md={6}>
                <div className={"UsServices__header"}>
                  <ScrollAnimation
                    offset={0}
                    delay={400 * 2}
                    animateIn="bounceIn"
                  >
                    <img
                      className={"UsServices__header__icon"}
                      src={iconBook}
                      draggable={false}
                      alt={"Icone Montagem de Templates e Laudos Tomograficos"}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    offset={0}
                    delay={200 * 2}
                    animateIn="fadeIn"
                  >
                    <Text>
                      <h4>
                        <strong>
                          Montagem de Templates <br />e Laudos Tomograficos
                        </strong>
                      </h4>
                    </Text>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation
                  offset={0}
                  delay={200 * 2}
                  animateIn="fadeInUp"
                >
                  <ul className={"UsServices__list"}>
                    <li>Avaliação de ATM</li>
                    <li>Avaliação Ortodôntica</li>
                    <li>Dentes Inclusos</li>
                    <li>Planejamento de Implantes</li>
                    <li>Lesões Patológicas</li>
                  </ul>
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} offset={{ md: 3 }}>
                <div className={"UsServices__header"}>
                  <ScrollAnimation
                    offset={0}
                    delay={400 * 1}
                    animateIn="bounceIn"
                  >
                    <img
                      className={"UsServices__header__icon"}
                      src={iconPaperTooth}
                      draggable={false}
                      alt={"Icone Conversão de Software para planejamentos"}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    offset={0}
                    delay={200 * 1}
                    animateIn="fadeIn"
                  >
                    <Text>
                      <h4>
                        <strong>
                          Conversão de Software <br />
                          para planejamentos
                        </strong>
                      </h4>
                    </Text>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation
                  offset={0}
                  delay={200 * 1}
                  animateIn="fadeInUp"
                >
                  <ul className={"UsServices__list"}>
                    <li>Dental Slice</li>
                    <li>Implant Viewer</li>
                  </ul>
                </ScrollAnimation>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default UsServices;
