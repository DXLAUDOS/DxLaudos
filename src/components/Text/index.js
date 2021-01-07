import React from "react";

import cn from "classnames";
import "./index.scss";
const Text = ({
  children,
  className,
  color = "default",
  align = "left",
  hr,
}) => {
  return (
    <div
      className={cn(`Text ${className ? className : ""}`, {
        "Text--primary": color === "primary",
        [`align-${align}`]: align,
      })}
    >
      {children}
      {hr && <hr className={"Text___hr"} />}
    </div>
  );
};

export default Text;
