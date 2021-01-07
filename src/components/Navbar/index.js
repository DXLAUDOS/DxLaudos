import React, { Component, setState } from "react";
import { Container, Row, Col } from "react-grid-system";
import cn from "classnames";

import "./index.scss";

import Logo from "../Logo";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowTop: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      ...this.state,
      windowTop: window.scrollY,
    });
    console.log(this.state);
  }

  render() {
    const linksIdList = [
      "Sobre a Empresa",
      "Nossos Serviços",
      "Portfólio",
      "Contato",
    ];
    return (
      <nav
        className={cn("Navbar", {
          "Navbar--fixed": window.scrollY > 30,
        })}
      >
        <Container>
          <Row align={"center"}>
            <Col
              style={{ transition: "width 300ms var(--default-cubic)" }}
              md={window.scrollY > 30 ? 3 : 4}
            >
              <Logo />
            </Col>
            <Col md={window.scrollY > 30 ? 9 : 8}>
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
  }
}
