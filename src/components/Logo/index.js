import React from "react";

import logo from "./images/logo.png";
import logoW from "./images/logo_branco.png";

const index = ({ type = "main", className }) => {
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
    <div className={"Logo"}>
      <a href={"#"}>
        <img
          src={logoSrc}
          alt={`Logo DX Laudos ${type !== "main" ? "principal" : "secundário"}`}
          draggable={"false"}
        />
      </a>
    </div>
  );
};

export default index;
