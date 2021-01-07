import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ScrollAnimation from "react-animate-on-scroll";

import "./index.scss";
import iconApp from "./images/icon-app.png";
import iconDentist from "./images/icon-dentist.png";
import iconCalendar from "./images/icon-calendar.png";

import Text from "../../components/Text";

const AboutUs = () => {
  return (
    <article id={"Sobre-a-Empresa"} className={"AboutUs"}>
      <Container>
        <Row>
          <Col sm={12} md={4} offset={{ md: 4.5 }}>
            <ScrollAnimation delay={200} animateIn="fadeInDown">
              <Text color="primary" hr>
                <h1>Sobre a empresa</h1>
              </Text>
            </ScrollAnimation>
          </Col>
          <Col xs={12}>
            <ScrollAnimation delay={400} animateIn="fadeIn">
              <Text align={"center"}>
                <h4>
                  A <strong>DX Laudos</strong> é uma empresa formada por uma
                  equipe de radiologistas com <strong>larga experiência</strong>
                  , com o intuito de ajudar as clínicas de radiologia a ter um{" "}
                  <strong>alto padrão de qualidade</strong> nos exames de forma{" "}
                  <strong>rápida</strong> e <strong>eficiente</strong>.
                </h4>
              </Text>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <div className={"AboutUs__shadowBox"}>
              <ScrollAnimation delay={200} animateIn="fadeInDown">
                <img
                  className={"AboutUs__shadowBox__icon"}
                  src={iconApp}
                  alt={"Icone Aplicativo"}
                  draggable={false}
                />
              </ScrollAnimation>
              <ScrollAnimation delay={300} animateIn="fadeIn">
                <Text align={"center"}>
                  <h4 className={"upcase"}>Especialiado</h4>
                  <p>
                    Contamos com uma equipe <strong>especializada</strong> e com{" "}
                    <strong>larga experiência</strong>
                    em <strong>laudos odontológicos</strong> e alto padrão em{" "}
                    <strong>laudos 2D</strong> e <strong>3D</strong>.
                  </p>
                </Text>
              </ScrollAnimation>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={"AboutUs__shadowBox"}>
              <ScrollAnimation delay={200 * 2} animateIn="fadeInDown">
                <img
                  className={"AboutUs__shadowBox__icon"}
                  src={iconDentist}
                  alt={"Icone Dentista"}
                  draggable={false}
                />
              </ScrollAnimation>
              <ScrollAnimation delay={300 * 2} animateIn="fadeIn">
                <Text align={"center"}>
                  <h4 className={"upcase"}>Personalizável</h4>
                  <p>
                    Criamos um atendimento que disponibiliza{" "}
                    <strong>laudo a distância</strong> com toda a possibilidade
                    de seus clientes <strong>personalizarem</strong> o formato
                    que <strong>desejam receber seus serviços</strong>.
                  </p>
                </Text>
              </ScrollAnimation>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={"AboutUs__shadowBox"}>
              <ScrollAnimation delay={200 * 3} animateIn="fadeInDown">
                <img
                  className={"AboutUs__shadowBox__icon"}
                  src={iconCalendar}
                  alt={"Icone Calendário"}
                  draggable={false}
                />
              </ScrollAnimation>
              <ScrollAnimation delay={300 * 3} animateIn="fadeIn">
                <Text align={"center"}>
                  <h4 className={"upcase"}>Ágil</h4>
                  <p>
                    Somos <strong>altamente criteriosos</strong> com nossos{" "}
                    <strong>prazos de entrega</strong>, visando sempre{" "}
                    <strong>atender às expectativas dos nossos clientes</strong>
                    .
                  </p>
                </Text>
              </ScrollAnimation>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ScrollAnimation
              className={"AboutUs__bottomText"}
              delay={200}
              animateIn="fadeIn"
            >
              <Text align={"center"}>
                <h5>
                  <strong>
                    Estamos no mercado desde 2003 ajudando as clínicas de todo
                    brasil.
                  </strong>
                </h5>
              </Text>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default AboutUs;
