import React from 'react'
import styles from "../styles/ProductList.module.css"
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST BAKLAVA IN TBILISI</h1>
        <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ab nulla, odio nam maxime, eligendi possimus blanditiis magni iste veritatis facilis quam amet, quo voluptate earum nostrum culpa fuga qui.
        </p>
        <div className={styles.wrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default ProductList