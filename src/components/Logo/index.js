import React from "react";

import logo from "./images/logo.png";
import logoW from "./images/logo_branco.png";

const index = ({ type = "main" }) => {
  var logoSrc;
  switch (type) {
    case type === "white":
      logoSrc = logoW;
      break;

    default:
      logoSrc = logo;
      break;
  }
  return (
    <>
      <a href={"#"}>
        <img
          src={logoSrc}
          alt={`Logo DX Laudos ${type !== "main" ? "principal" : "secundário"}`}
          draggable={"false"}
        />
      </a>
    </>
  );
};

export default index;
