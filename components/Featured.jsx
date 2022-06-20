import Image from "next/image";
import React, {useState} from "react";
import styles from "../styles/Featured.module.css";



const Featured = () => {
  
  const [index, setIndex] = useState(0)

  const handleArrow = (direction) => {
    if(direction === 'l') {
      setIndex( index !== 0 ? index-1 : 4)
    }
    if(direction === 'r') {
      setIndex (index !== 4 ? index + 1 : 0)
    }
  }


  const images = [
    // "/../public/img/sweets/image1.jpg",
    "/../public/img/sweets/image2.jpg",
    "/../public/img/sweets/image3.jpg",
    // "/../public/img/sweets/image4.jpg",
    "/../public/img/sweets/image5.jpg",
    "/../public/img/sweets/image6.jpg",
    "/../public/img/sweets/image7.jpg",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: "0" }} onClick={() => handleArrow('l')}>
        <Image
          src="/../public/img/leftArrow.png"
          layout="fill"
          alt="left arrow"
          objectFit="contain"
        />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, index) => (
          <div className={styles.imgContainer} key={index} >
            <Image src={img} alt="image" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: "0" }} onClick={() => handleArrow('r')}>
        <Image
          src="/../public/img/rightArrow.png"
          layout="fill"
          alt="right arrow"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
