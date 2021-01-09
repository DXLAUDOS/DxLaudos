import React from "react";

import logo from "./images/logo.png";
import logoW from "./images/logo_branco.png";

const Logo = ({ type = "main", className, style }) => {
  return (
    <div className={`Logo ${className ? className : ""}`} style={style}>
      <a href={"#top"}>
        <img
          src={type !== "main" ? logoW : logo}
          alt={`Logo DX Laudos ${type !== "main" ? "principal" : "secundário"}`}
          draggable={"false"}
        />
      </a>
    </div>
  );
};

export default Logo;
