import React from "react";
import css from "./style.module.css";

function About() {
  return (
    <div className={css.aboutBox}>
      <h2 className={css.title}>About Me:</h2>
      <h6>about me text</h6>
    </div>
  );
}

export default About;
