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
      className={cn(`Text`, {
        "Text--primary": color === "primary",
        [`align-${align}`]: align,
        [className]: className,
      })}
    >
      {children}
      {hr && <hr className={"Text___hr"} />}
    </div>
  );
};

export default Text;
