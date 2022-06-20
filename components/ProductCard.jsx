import Image from 'next/image'
import React from 'react'
import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/../public/img/sweets/image1.jpg" alt="" width="500" height="500" />
        <h1 className={styles.title}>LEZZETLI BAKLAVA</h1>
        <span className={styles.price}>5 Gel</span>
        <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae impedit consequuntur alias necessitatibus facilis fuga expedita nisi exercitationem deserunt a repellendus, placeat sunt aliquam. Iusto soluta ad consequatur praesentium? Praesentium?
        </p>
    </div>
  )
}

export default ProductCard