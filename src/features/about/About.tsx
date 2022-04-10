import React, { useEffect } from "react";
import styles from "./About.module.css";

const About = () => (
  <main className={styles.wrapper}>
    <section className={`${styles.section} ${styles.parallax} ${styles.bg1}`}>
      <h1>Cute Kitten</h1>
    </section>
    <section className={`${styles.section} ${styles.static}`}>
      <h1>Boring</h1>
    </section>
    <section className={`${styles.section} ${styles.parallax} ${styles.bg2}`}>
      <h1>Fluffy Kitten</h1>
    </section>
  </main>
);

export default About;
