import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://discoverdobrogea.ro/wp-content/uploads/2022/01/Baluta-02-min.jpeg" 
        fill={true} 
        alt=""
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h2 className={styles.imgDesc}>Iubim Dobrogea, de aceea ne dorim să</h2>
          <h2 className={styles.imgDesc}>o promovăm cât mai mult cu putință</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>&emsp;Crezi că știi tot despre Dobrogea?</h1>
        <p className={styles.desc}>
        &emsp;&emsp;Noi suntem aici pentru tine! Te ținem la curent cu toate atracțiile și evenimentele culturale, dar totodată ne mai delectăm din când în când și cu povesti istorice.
        <br/><br/>&emsp;&emsp;E greu să ții pasul cu informațiile din ziua de astăzi, motiv pentru care îți sintetizăm tot ce trebuie să știi despre Dobrogea în acest site.
        <br/><br/>&emsp;&emsp;Cine știe, poate te vom ajuta să iți găsești următoarea aventură.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Vrei să contribui?</h1>
        <p className={styles.desc}>
        Hai în echipa noastră!
        <br/><br/>Având în vedere că suntem la început de drum, orice ajutor e binevenit. Așa că nu ezita să ne contactezi.
        </p>
        <Button url="/contact" text="Contact"/>
      </div>
      </div>
    </div>
  )
}

export default About;
