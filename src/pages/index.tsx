import * as styles from '@/styles/pages/home.css'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useContext } from 'react'
import { CartContext, Product } from '@/contexts/CartContext'

export interface IProducts {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    defaultPriceId: string
    description: string
  }[]
}

export default function Home({ products }: IProducts) {
  const { addProductToCart, productAlreadyExists } = useContext(CartContext)

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    slides: () => [
      {
        size: 0.35,
        spacing: 0.06,
      },
      {
        size: 0.35,
        spacing: 0.06,
      },
      {
        size: 0.35,
        spacing: 0.06,
      },
      {
        size: 0.35,
        spacing: 0.06,
      },
    ],
  })

  function handleProductToCart(e, product: Product) {
    e.preventDefault()
    addProductToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
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
                <div className={styles.footerProductInfo}>
                  <strong className={styles.strong}>{product.name}</strong>
                  <span className={styles.span}>{product.price}</span>
                </div>
                <button
                  className={styles.footerProductCartButton}
                  onClick={(e) => handleProductToCart(e, product)}
                  disabled={productAlreadyExists(product)}
                >
                  <Handbag size={32} />
                </button>
              </footer>
            </Link>
          )
        })}
      </main>
    </>
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
      defaultPriceId: price.id,
      description: product.description,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60,
  }
}
