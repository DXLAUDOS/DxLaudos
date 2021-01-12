import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./index.scss";

import Animate from "../../components/Animate";
import Text from "../../components/Text";
import Logo from "../../components/Logo";
import LinksList from "../../components/LinksList";

const Footer = () => {
  const numberWhatsApp = "11979872443";
  return (
    <footer className={"Footer"}>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <Animate offset={0} delay={200} animate="fadeIn">
              <Logo type={"white"} />
            </Animate>
            <Animate offset={0} delay={200 * 2} animate="fadeInDown">
              <Text>
                <h6>Especializada em Laudos de Tomografia Odontológica</h6>
              </Text>
            </Animate>
            <div className={"Footer__socialMedia"}>
              <Animate offset={0} delay={200 * 3} animate="fadeInDown">
                <Text>
                  <h6>Siga nas redes sociais:</h6>
                </Text>
              </Animate>
              <div className={"Footer__socialMedia__icons"}>
                <Animate offset={0} delay={200 * 4} animate="fadeInUp">
                  <FontAwesomeIcon
                    onClick={() => {
                      window.open(
                        `https://www.facebook.com/dxlaudos`,
                        "_blank"
                      );
                    }}
                    color={"var(--white)"}
                    icon={faFacebook}
                    size={"3x"}
                    className={"SocialIcon"}
                  />
                </Animate>
                <Animate offset={0} delay={200 * 5} animate="fadeInUp">
                  <FontAwesomeIcon
                    onClick={() => {
                      window.open(
                        `https://api.whatsapp.com/send?phone=55${numberWhatsApp}`,
                        "_blank"
                      );
                    }}
                    color={"var(--white)"}
                    icon={faWhatsapp}
                    size={"3x"}
                    className={"SocialIcon"}
                  />
                </Animate>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} offset={{ md: 4 }}>
            <LinksList block />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Animate offset={0} delay={200 * 7} animate="fadeInUp">
              <Text align="center">
                <h6 style={{ color: "var(--light-blue)", marginTop: "3.5rem" }}>
                  © DXLaudos3D | CNPJ 38.441.478/0001-20 | Todos os direitos
                  reservados.
                </h6>
              </Text>
            </Animate>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
