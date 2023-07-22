import * as styles from '@/styles/pages/home.css'
import Image from 'next/image'

import t1 from '../assets/camisetas/1.png'
import t2 from '../assets/camisetas/2.png'
import t3 from '../assets/camisetas/3.png'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main className={`${styles.homeContainer} keen-slider`} ref={sliderRef}>
      <a href="" className={`${styles.product} keen-slider__slide`}>
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

      <a href="" className={`${styles.product} keen-slider__slide`}>
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

      <a href="" className={`${styles.product} keen-slider__slide`}>
        <Image
          src={t3}
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

      <a href="" className={`${styles.product} keen-slider__slide`}>
        <Image
          src={t3}
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
