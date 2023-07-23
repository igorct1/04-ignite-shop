import * as styles from '@/styles/pages/home.css'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import Link from 'next/link'

interface Products {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: Products) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main className={`${styles.homeContainer} keen-slider`} ref={sliderRef}>
      {products.map((product) => {
        return (
          <Link
            prefetch={false}
            key={product.id}
            href={`/product/${product.id}`}
            className={`${styles.product} keen-slider__slide`}
          >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt=""
              className={styles.image}
            />

            <footer className={styles.footer}>
              <strong className={styles.strong}>{product.name}</strong>
              <span className={styles.span}>{product.price}</span>
            </footer>
          </Link>
        )
      })}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60,
  }
}
