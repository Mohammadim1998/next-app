import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design<br /> for your digital<br /> products.
        </h1>

        <p className={styles.desc}>
          Turning Your Idea into reality. We bring together the teams from the
          global tech industry.
        </p>

        <Button url="/portfolio" text="See Our Works" />
      </div>

      <div className={styles.item}>
        <Image width={500} height={500} src="/images/hero.png" className={styles.img}  alt="" />
      </div>
    </div>
  );
}
