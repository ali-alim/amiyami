import React from 'react'
import Image from "next/image";
import styles from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/../public/img/footer_img.jpg" layout='fill' alt="/"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
        <h2 className={styles.word}>
          We did it! The tastest baklava in Tbilisi. Order it now!
        </h2>
        </div>
        <div className={styles.card}>
        <h2 className={styles.title}>
          Find our restaurants!
        </h2>
        <p className={styles.text}>
          Vake-Saburtalo
          <br />Tbilisi
          <br />995 555 555 555
        </p>
        <p className={styles.text}>
          Vake-Saburtalo
          <br />Tbilisi
          <br />995 555 555 555
        </p>
        <p className={styles.text}>
          Vake-Saburtalo
          <br />Tbilisi
          <br />995 555 555 555
        </p>
        </div>
        <div className={styles.card}>
        <h2 className={styles.title}>
          WORKING HOURS
        </h2>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br /> 09:00 - 21:00
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer