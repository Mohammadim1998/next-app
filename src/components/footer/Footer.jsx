import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image src="/images/social/1.png" className={styles.icon} width={15} height={15} alt='instagram'/>
          <Image src="/images/social/2.png" className={styles.icon} width={15} height={15} alt='instagram'/>
          <Image src="/images/social/3.png" className={styles.icon} width={15} height={15} alt='instagram'/>
          <Image src="/images/social/4.png" className={styles.icon} width={15} height={15} alt='instagram'/>
        </div>
      </div>
    </div>
  )
}
