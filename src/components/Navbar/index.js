import React, { useEffect, useState } from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

import Logo from "../Logo";
import LinksList from "../LinksList";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [MenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    function watchScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", watchScroll);
    watchScroll();

    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  });
  return (
    <nav
      className={cn("Navbar", {
        "Navbar--fixed": scrollY > 30,
      })}
    >
      <Container>
        <Row align={"center"}>
          <Col
            style={{
              animationDelay: "200ms",
            }}
            md={scrollY > 30 ? 3 : 4}
            className={"animated fadeInDown"}
            xs={10}
            offset={{ xs: 1, sm: 0 }}
          >
            <Logo />
          </Col>
          <Col md={scrollY > 30 ? 9 : 8}>
            <Visible md lg xl xxl>
              <LinksList />
            </Visible>
            <Visible sm xs>
              <div
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  padding: "8px 0",
                  cursor: "pointer",
                }}
                onClick={() => setMenuVisible(!MenuVisible)}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{
                    transform: MenuVisible ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 300ms var(--default-cubic)",
                  }}
                  size={"3x"}
                />
                {MenuVisible && <LinksList className={"mobileList"} block />}
              </div>
            </Visible>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
export default Navbar;
