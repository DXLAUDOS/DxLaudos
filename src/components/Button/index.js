import React from "react";
import cn from "classnames";

import "./index.scss";

const Button = ({
  children,
  onClick,
  isLoading,
  fluid,
  disabled,
  type,
  aling = "center",
  sm,
  href,
  icon,
}) => {
  return (
    <div
      className={cn("Button__container", {
        "Button__container__align--center": aling === "center",
        "Button__container__align--right": aling === "right",
        "Button__container__align--left": aling === "left",
        "Button__container--icon": icon,
      })}
    >
      <div
        className={cn("Button", {
          "Button--fluid": fluid,
          "Button--disabled": disabled,
          "Button--sm": sm,
        })}
      >
        <React.Fragment>
          {!href ? (
            <button
              onClick={disabled ? null : onClick}
              type={type}
              disabled={disabled}
              href={href}
            >
              {children}
            </button>
          ) : (
            <a disabled={disabled} href={href} target="_blank">
              {children}
            </a>
          )}
        </React.Fragment>
      </div>
    </div>
  );
};

Button.propTypes = {};

Button.defaultProps = {
  disabled: false,
  type: "button",
};

export default Button;
