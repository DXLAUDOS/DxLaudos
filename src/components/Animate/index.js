import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./index.scss";
const Animate = ({
  children,
  animate = "fadeIn",
  delay = 0,
  duration = 1,
  offset = 100,
  className,
}) => {
  return (
    <ScrollAnimation
      animateOnce={true}
      delay={delay}
      animateIn={animate}
      duration={duration}
      offset={offset}
      className={className ? className : ""}
      animatePreScroll={true}
    >
      {children}
    </ScrollAnimation>
  );
};

export default Animate;
