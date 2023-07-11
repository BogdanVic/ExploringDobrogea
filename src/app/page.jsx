import Image from "next/image";
import styles from "./page.module.css";
import Map from "public/dobrogea-map.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Bine ai venit!
        </h1>
        <div className={styles.desc}>
        <p>
        Haide să pășim împreună pe aceste meleaguri
        </p>
        <p>
        minunate pe care Dobrogea le deține
        </p>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <Image src={Map} alt="" className={styles.img} />
      </div>
    </div>
  );
}
