import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

async function getData() {
  const res = await fetch("http://localhost:3000/api/articole/turism", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Portfolio = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      
      {data.map((item) => (

        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button text="See More" url={`/articole/turism/${item._id}`} />
        </div>
        <div className={styles.imgContainer}>
        <Image className={styles.img}
          fill={true}
          src={item.imageArticle}
          alt=""
          />
        </div>
      </div>
          ))}
    </div>
  )
}

export default Portfolio
