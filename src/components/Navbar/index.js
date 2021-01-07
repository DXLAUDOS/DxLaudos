import React from "react";
import { Container, Row, Col } from "react-grid-system";

import "./index.scss";

import Logo from "../Logo";
const linksIdList = [
  "Sobre a Empresa",
  "Nossos Serviços",
  "Portfólio",
  "Contato",
];
const Navbar = () => {
  return (
    <nav className={"Navbar"}>
      <Container>
        <Row align={"center"}>
          <Col md={3.5}>
            <Logo />
          </Col>
          <Col md={7} offset={{ md: 1.5 }}>
            <ul>
              {linksIdList.map((e, i) => {
                return (
                  <li key={i}>
                    <a href={`#${e.split(" ").join("-")}`}>{e}</a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
