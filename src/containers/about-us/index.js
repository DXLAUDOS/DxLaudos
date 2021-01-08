import React from "react";
import { Container, Row, Col } from "react-grid-system";

import "./index.scss";
import iconApp from "./images/icon-app.png";
import iconDentist from "./images/icon-dentist.png";
import iconCalendar from "./images/icon-calendar.png";

import Text from "../../components/Text";
import Animate from "../../components/Animate";

const AboutUs = () => {
  return (
    <article id={"Sobre-a-Empresa"} className={"AboutUs"}>
      <Container>
        <Row>
          <Col sm={12} md={4} offset={{ md: 4.5 }}>
            <Animate delay={200} animate="fadeInDown">
              <Text color="primary" hr>
                <h1>Sobre a empresa</h1>
              </Text>
            </Animate>
          </Col>
          <Col xs={12}>
            <Animate delay={400} animate="fadeIn">
              <Text align={"center"}>
                <h4>
                  A <strong>DX Laudos</strong> é uma empresa formada por uma
                  equipe de radiologistas com <strong>larga experiência</strong>
                  , com o intuito de ajudar as clínicas de radiologia a ter um{" "}
                  <strong>alto padrão de qualidade</strong> nos exames de forma{" "}
                  <strong>rápida</strong> e <strong>eficiente</strong>.
                </h4>
              </Text>
            </Animate>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <div className={"AboutUs__shadowBox"}>
              <Animate delay={200} animate="fadeInDown">
                <img
                  className={"AboutUs__shadowBox__icon"}
                  src={iconApp}
                  alt={"Icone Aplicativo"}
                  draggable={false}
                />
              </Animate>
              <Animate delay={300} animate="fadeIn">
                <Text align={"center"}>
                  <h4 className={"upcase"}>Especialiado</h4>
                  <p>
                    Contamos com uma equipe <strong>especializada</strong> e com{" "}
                    <strong>larga experiência</strong>
                    em <strong>laudos odontológicos</strong> e alto padrão em{" "}
                    <strong>laudos 2D</strong> e <strong>3D</strong>.
                  </p>
                </Text>
              </Animate>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={"AboutUs__shadowBox"}>
              <Animate delay={200 * 2} animate="fadeInDown">
                <img
                  className={"AboutUs__shadowBox__icon"}
                  src={iconDentist}
                  alt={"Icone Dentista"}
                  draggable={false}
                />
              </Animate>
              <Animate delay={300 * 2} animate="fadeIn">
                <Text align={"center"}>
                  <h4 className={"upcase"}>Personalizável</h4>
                  <p>
                    Criamos um atendimento que disponibiliza{" "}
                    <strong>laudo a distância</strong> com toda a possibilidade
                    de seus clientes <strong>personalizarem</strong> o formato
                    que <strong>desejam receber seus serviços</strong>.
                  </p>
                </Text>
              </Animate>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={"AboutUs__shadowBox"}>
              <Animate delay={200 * 3} animate="fadeInDown">
                <img
                  className={"AboutUs__shadowBox__icon"}
                  src={iconCalendar}
                  alt={"Icone Calendário"}
                  draggable={false}
                />
              </Animate>
              <Animate delay={300 * 3} animate="fadeIn">
                <Text align={"center"}>
                  <h4 className={"upcase"}>Ágil</h4>
                  <p>
                    Somos <strong>altamente criteriosos</strong> com nossos{" "}
                    <strong>prazos de entrega</strong>, visando sempre{" "}
                    <strong>atender às expectativas dos nossos clientes</strong>
                    .
                  </p>
                </Text>
              </Animate>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Animate
              className={"AboutUs__bottomText"}
              delay={200}
              animate="fadeIn"
            >
              <Text align={"center"}>
                <h5>
                  <strong>
                    Estamos no mercado desde 2003 ajudando as clínicas de todo
                    brasil.
                  </strong>
                </h5>
              </Text>
            </Animate>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default AboutUs;
