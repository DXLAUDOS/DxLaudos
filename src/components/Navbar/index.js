import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import cn from "classnames";

import "./index.scss";

import Logo from "../Logo";
import ScrollAnimation from "react-animate-on-scroll";

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
              <ScrollAnimation
                delay={200}
                offset={0}
                animateOnce={true}
                animatePreScroll={true}
                animateIn="fadeInDown"
              >
                <Logo />
              </ScrollAnimation>
            </Col>
            <Col md={window.scrollY > 30 ? 9 : 8}>
              <ul>
                {linksIdList.map((e, i) => {
                  return (
                    <li key={i}>
                      <ScrollAnimation
                        delay={200 * (i + 2)}
                        offset={0}
                        animateOnce={true}
                        animatePreScroll={true}
                        animateIn="fadeInDown"
                      >
                        <a href={`#${e.split(" ").join("-")}`}>{e}</a>
                      </ScrollAnimation>
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
