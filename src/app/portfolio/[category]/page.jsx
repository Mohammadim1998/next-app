import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Category() {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>Articles</h1>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam pariatur optio, perferendis consequatur odio quis unde deserunt odit nemo officiis est ad inventore at esse laboriosam accusantium beatae quibusdam.</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/pexels-photo-about.jpeg"
              alt=""
            />
          </div>
        </div>
    </div>
  );
};

