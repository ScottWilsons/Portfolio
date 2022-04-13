import React from "react";
import Image from "next/image";
import css from "./style.module.css";

function Welcome() {
  return (
    <div className={css.titleBox}>
      <div>
        <h1 className={css.title}>Hi, I am Scott Wilson.</h1>
        <h2>Welcome to my portfolio</h2>
      </div>
      <div>
        <Image
          className={css.imageBox}
          alt="A picture of me"
          height={300}
          width={300}
          src="https://i.imgur.com/A212bxt.jpg"
        />
      </div>
    </div>
  );
}

export default Welcome;
