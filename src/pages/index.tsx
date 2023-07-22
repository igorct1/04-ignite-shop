import * as styles from '@/styles/pages/home.css'
import Image from 'next/image'

import t1 from '../assets/camisetas/1.png'
import t2 from '../assets/camisetas/2.png'

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <a href="" className={styles.product}>
        <Image
          src={t1}
          width={520}
          height={480}
          alt=""
          className={styles.image}
        />

        <footer className={styles.footer}>
          <strong className={styles.strong}>Camiseta X</strong>
          <span className={styles.span}>R$ 79,90</span>
        </footer>
      </a>
      <a href="" className={styles.product}>
        <Image
          src={t2}
          width={520}
          height={480}
          alt=""
          className={styles.image}
        />

        <footer className={styles.footer}>
          <strong className={styles.strong}>Camiseta X</strong>
          <span className={styles.span}>R$ 79,90</span>
        </footer>
      </a>
    </main>
  )
}
