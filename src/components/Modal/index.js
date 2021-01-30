import React from "react";

import "./index.scss";

export default function Modal({ children, onClick }) {
  return (
    <div onClick={onClick} className={"Modal"}>
      {children}
    </div>
  );
}
