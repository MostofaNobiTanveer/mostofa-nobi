import React from "react";
import classes from "../styles/Marquee.module.css";

const Marquee = ({ firstText, secondText }) => {
  return (
    <div className={classes.marquee__container}>
      <div className={classes.marquee}>
        <div aria-hidden="true" className={classes.marquee__inner}>
          <span>
            {" "}
            &mdash; {firstText} &mdash;{" "}
            <span className="outline">{secondText}</span>&nbsp;
          </span>
          <span>
            {" "}
            &mdash; {firstText} &mdash;{" "}
            <span className="outline">{secondText}</span>&nbsp;
          </span>
          <span>
            {" "}
            &mdash; {firstText} &mdash;{" "}
            <span className="outline">{secondText}</span>&nbsp;
          </span>
          <span>
            {" "}
            &mdash; {firstText} &mdash;{" "}
            <span className="outline">{secondText}</span>&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
