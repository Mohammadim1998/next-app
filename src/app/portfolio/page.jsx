import React from "react";
import styles from './page.module.css';
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href={'/portfolio/testid'} className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href={'/portfolio/testid'} className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href={'/portfolio/testid'} className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  );
}
