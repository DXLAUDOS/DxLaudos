import React from "react";
import cn from "classnames";

import "./index.scss";

const FAB = ({ children, onClick, disabled, type }) => {
  return (
    <div className={cn("FAB__container", {})}>
      <div
        className={cn("FAB", {
          "FAB--disabled": disabled,
        })}
      >
        <React.Fragment>
          <button
            onClick={disabled ? null : onClick}
            type={type}
            disabled={disabled}
          >
            {children}
          </button>
        </React.Fragment>
      </div>
    </div>
  );
};

FAB.propTypes = {};

FAB.defaultProps = {
  disabled: false,
  type: "button",
};

export default FAB;
