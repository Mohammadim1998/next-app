import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            porro totam, beatae minus nisi accusantium labore nulla neque
            quaerat distinctio, et dicta perferendis. Necessitatibus sit minus
            corporis consequuntur, ut amet.
          </p>
          <div className={styles.author}>
            <Image
              src="/images/pexels-photo-about.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Mohammad</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/pexels-photo-about.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          dolorum a, dignissimos, sint perferendis explicabo aperiam quia illo
          eum eaque quaerat corporis placeat quisquam cum? Ab excepturi
          consequuntur eum cum!
        </p>
      </div>
    </div>
  );
}
