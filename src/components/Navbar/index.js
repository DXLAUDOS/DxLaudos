import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import cn from "classnames";

import "./index.scss";

import Logo from "../Logo";
import LinksList from "../LinksList";

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
    return (
      <nav
        className={cn("Navbar", {
          "Navbar--fixed": window.scrollY > 30,
        })}
      >
        <Container>
          <Row align={"center"}>
            <Col
              style={{
                animationDelay: "200ms",
              }}
              md={window.scrollY > 30 ? 3 : 4}
              className={"animated fadeInDown"}
            >
              <Logo />
            </Col>
            <Col md={window.scrollY > 30 ? 9 : 8}>
              <LinksList />
            </Col>
          </Row>
        </Container>
      </nav>
    );
  }
}
