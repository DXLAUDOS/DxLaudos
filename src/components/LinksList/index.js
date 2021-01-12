import React from "react";
import cn from "classnames";

import "./index.scss";
const LinksList = ({ className, style, block = false }) => {
  const linksIdList = [
    "Sobre a Empresa",
    "Nossos Serviços",
    "Portfólio",
    "Contato",
  ];
  return (
    <ul className={cn(`LinksList ${className ? className : ""}`)} style={style}>
      {linksIdList &&
        linksIdList.map((e, i) => {
          return (
            <li
              key={i}
              style={{
                animationDelay: `${200 * (i + 1)}ms`,
              }}
              className={cn("animated fadeInDown", {
                LinksList__block: block,
              })}
            >
              <a href={`#${e.split(" ").join("-")}`}>{e}</a>
            </li>
          );
        })}
    </ul>
  );
};

export default LinksList;
