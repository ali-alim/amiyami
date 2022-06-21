import React, {useState} from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
    const [size, setSize] = useState(0);
  const baklava = {
    id: 1,
    img: "/img/baklava.jpg",
    name: "Baklava",
    price: [1.5, 2, 2.5],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab tempora nisi qui assumenda laudantium sed, itaque doloribus eligendi minus similique corrupti, vero corporis rem officiis fugiat at repellendus aut.",
  };
  return <div className={styles.container}>
    <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src={baklava.img} layout="fill" alt="" objectFit="contain" />
        </div>
    </div>
    <div className={styles.right}>
        <h1 className={styles.title}>{baklava.name}</h1>
        <span className={styles.price}>${baklava.price[size]}</span>
        <p className={styles.desc}>{baklava.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={() => setSize(2)}>
                <Image src="/img/size.png" layout="fill" alt="" />
                <span className={styles.number}>Large</span>
            </div>
            </div>
            <div className={styles.ingredient}>
                <div className={styles.option}>
                    <input 
                    type="checkbox"
                    id="double"
                    name="double"
                    className={styles.checkbox}
                    />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
        </div>
    </div>
  </div>;
};

export default Product;
