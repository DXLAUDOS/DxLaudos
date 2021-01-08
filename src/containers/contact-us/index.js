import React from "react";
import { Container, Row, Col } from "react-grid-system";

import "./index.scss";

import Animate from "../../components/Animate";
import Text from "../../components/Text";
const ContactUs = () => {
  return (
    <article id={"Nossos-Serviços"} className={"ContactUs"}>
      <Container>
        <Row>
          <Col sm={12} md={4} offset={{ md: 4.5 }}>
            <Animate offset={0} delay={200} animate="fadeInDown">
              <Text color="primary" hr>
                <h1>Entre em Contato</h1>
              </Text>
            </Animate>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default ContactUs;
