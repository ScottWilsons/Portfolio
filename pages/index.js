import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>Home </div>
        <div>About me</div>
        <div>Projects</div>
        <div>Contact me</div>
      </nav>
      <br></br>
      <hr></hr>
      <br></br>
      <main className={styles.main}>
        <div className={styles.titleBox}>
          <div>
            <h1 className={styles.title}>Hi, I am Scott Wilson</h1>
            <h3>Welcome to my portfolio</h3>
          </div>
          <div>
            <Image
              className={styles.imageBox}
              alt="A picture of me"
              height={200}
              width={200}
              src="/../public/1576483373136.jpeg"
            />
          </div>
        </div>
        {/* <Image
          width={600}
          height={400}
          alt="picture of a computer"
          src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
        /> */}
      </main>
    </div>
  );
}
