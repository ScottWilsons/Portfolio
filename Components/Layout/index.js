import React from "react";
import styles from "../../styles/Home.module.css";
import NavBar from "../NavBar";
import Projects from "../Projects";
import "antd/dist/antd.css";
import Welcome from "../Welcome";
import About from "../About";

function Layout() {
  return (
    <div className={styles.container}>
      <NavBar />
      <br></br>
      <hr></hr>
      <br></br>
      <main className={styles.main}>
        <Welcome />
        <About />
        <br></br>
        <br></br>
        <br></br>
        <Projects />
      </main>
    </div>
  );
}

export default Layout;
