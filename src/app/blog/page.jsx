import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/testid`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/pexels-photo-about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quos expedita vero tempore blanditiis vel, aliquid
            delectus maiores at esse ipsam aspernatur! Fuga, officiis. Molestiae
            tempora in reiciendis vitae animi.
          </p>
        </div>
      </Link>

      <Link href={`/blog/testid`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/pexels-photo-about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quos expedita vero tempore blanditiis vel, aliquid
            delectus maiores at esse ipsam aspernatur! Fuga, officiis. Molestiae
            tempora in reiciendis vitae animi.
          </p>
        </div>
      </Link>

      <Link href={`/blog/testid`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/pexels-photo-about.jpeg"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit quos expedita vero tempore blanditiis vel, aliquid
            delectus maiores at esse ipsam aspernatur! Fuga, officiis. Molestiae
            tempora in reiciendis vitae animi.
          </p>
        </div>
      </Link>
    </div>
  );
}
