import React from "react";
import "./index.scss";
const LinksList = ({ className, style }) => {
  const linksIdList = [
    "Sobre a Empresa",
    "Nossos Serviços",
    "Portfólio",
    "Contato",
  ];
  return (
    <ul className={(className, style)}>
      {linksIdList &&
        linksIdList.map((e, i) => {
          return (
            <li
              key={i}
              style={{
                animationDelay: `${200 * (i + 1)}ms`,
              }}
              className={"animated fadeInDown"}
            >
              <a href={`#${e.split(" ").join("-")}`}>{e}</a>
            </li>
          );
        })}
    </ul>
  );
};

export default LinksList;
