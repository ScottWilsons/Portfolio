import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import NavBar from "../NavBar";
import Projects from "../Projects";
import "antd/dist/antd.css";

function Layout() {
  return (
    <div className={styles.container}>
      <NavBar />
      <br></br>
      <hr></hr>
      <br></br>
      <main className={styles.main}>
        <div className={styles.titleBox}>
          <div>
            <h1 className={styles.title}>Hi, I am Scott Wilson.</h1>
            <h2>Welcome to my portfolio</h2>
          </div>
          <div>
            <Image
              className={styles.imageBox}
              alt="A picture of me"
              height={200}
              width={200}
              src="https://i.imgur.com/A212bxt.jpg"
            />
          </div>
        </div>
        <div className={styles.aboutBox}>
          <h2 className={styles.title}>About Me:</h2>
          <h6>about me text</h6>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <Projects />
      </main>
    </div>
  );
}

export default Layout;
