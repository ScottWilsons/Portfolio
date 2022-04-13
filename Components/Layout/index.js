import React from "react";
import styles from "../../styles/Home.module.css";
import NavBar from "../NavBar";
import Projects from "../Projects";
import "antd/dist/antd.css";
import Welcome from "../Welcome";

function Layout() {
  return (
    <div className={styles.container}>
      <NavBar />
      <br></br>
      <hr></hr>
      <br></br>
      <main className={styles.main}>
        <Welcome />

        <div className={styles.aboutBox}>
          <h2 className={styles.title}>About Me:</h2>
          <h6>about me text</h6>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Projects />
      </main>
    </div>
  );
}

export default Layout;
