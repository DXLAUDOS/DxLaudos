import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import imgMain from "./images/ContactImage.png";
import imgMainS from "./images/ContactImageS.png";

import Animate from "../../components/Animate";
import Text from "../../components/Text";
import Button from "../../components/Button";
const ContactUs = () => {
  const numberWhatsApp = "(11) 94830-9697";
  const contactEmail = "dxlaudosexames@gmail.com";
  const removeMask = (_t) => {
    return _t
      .split("(")
      .join("")
      .split(")")
      .join("")
      .split(" ")
      .join("")
      .split("-")
      .join("");
  };
  return (
    <article id={"Contato"} className={"ContactUs"}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} offset={{ md: 4 }}>
            <Animate offset={0} delay={200} animate="fadeInDown">
              <Text color="primary" hr>
                <h1>Entre em Contato</h1>
              </Text>
            </Animate>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} offset={{ md: 5 }}>
            <Animate offset={0} delay={200 * 2} animate="fadeIn">
              <Text className="align-justify">
                <h4>
                  Solicite os serviços pelas redes sociais. Se preferir entre em
                  contato via telefone ou e-mail.
                </h4>
              </Text>
            </Animate>
            <Row>
              <Col md={5.5} style={{ marginBottom: "2rem" }}>
                <Animate offset={0} delay={200 * 3} animate="fadeInDown">
                  <Button
                    onClick={() => {
                      window.open(
                        `https://api.whatsapp.com/send?phone=55${removeMask(
                          numberWhatsApp
                        )}`,
                        "_blank"
                      );
                    }}
                    fluid
                    icon
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size={"2x"}
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5rem",
                      }}
                    />
                    Fale pelo WhatsApp
                  </Button>
                </Animate>
              </Col>
              <Col
                md={5.5}
                offset={{ md: 0.5 }}
                style={{ marginBottom: "2rem" }}
              >
                <Animate offset={0} delay={200 * 4} animate="fadeInDown">
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/messages/t/1523081824648498",
                        "_blank"
                      )
                    }
                    fluid
                    icon
                  >
                    <FontAwesomeIcon
                      icon={faFacebookMessenger}
                      size={"2x"}
                      style={{
                        verticalAlign: "middle",
                        marginRight: "0.5rem",
                      }}
                    />
                    Fale pelo Messenger
                  </Button>
                </Animate>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{ marginTop: "1rem" }}>
                <Animate offset={0} delay={200 * 5} animate="fadeInDown">
                  <Text>
                    <h3>
                      <a
                        href={`https://api.whatsapp.com/send?phone=55${numberWhatsApp}`}
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon
                          color={"var(--primary)"}
                          icon={faWhatsapp}
                          style={{
                            verticalAlign: "-0.75rem",
                            marginRight: "1.25rem",
                            fontSize: "2.5rem",
                          }}
                        />
                        {numberWhatsApp}
                      </a>
                    </h3>
                  </Text>
                </Animate>
                <Animate offset={0} delay={200 * 7} animate="fadeInDown">
                  <Text>
                    <h3 style={{ verticalAlign: "middle" }}>
                      <a
                        href={`mailto:${contactEmail}`}
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon
                          color={"var(--primary)"}
                          icon={faEnvelope}
                          style={{
                            verticalAlign: "-0.75rem",
                            marginRight: "1rem",
                            fontSize: "2.5rem",
                          }}
                        />
                        {contactEmail}
                      </a>
                    </h3>
                  </Text>
                </Animate>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className={"ContactUs__Image"}>
        <Col md={5}>
          <div className={"ContactUs__Image__S"}>
            <Animate delay={400} animate="fadeInDown">
              <img
                src={imgMainS}
                alt={"DX Laudos Silhueta"}
                draggable={false}
              />
            </Animate>
          </div>
          <Animate delay={800} animate="fadeInDown">
            <img src={imgMain} alt={"DX Laudos - Home"} draggable={false} />
          </Animate>
        </Col>
      </div>
    </article>
  );
};

export default ContactUs;
