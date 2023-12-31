import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'

import * as styles from '../../styles/pages/product.css'
import { useContext } from 'react'
import Head from 'next/head'
import { CartContext, Product } from '@/contexts/CartContext'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { cart, addProductToCart, removeProductFromCart } =
    useContext(CartContext)

  const isProductAlreadyInCart = cart.findIndex(
    (cartItem) => cartItem.id === product.id,
  )

  function handleAddProductToCart(product: Product) {
    addProductToCart(product)
  }

  function handleRemoveProductFromCart(product: Product) {
    removeProductFromCart(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <main className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </div>
        <div className={styles.productDetails}>
          <h1 className={styles.title}>{product.name}</h1>
          <span className={styles.price}>{product.price}</span>

          <p className={styles.paragraph}>{product.description}</p>

          {isProductAlreadyInCart >= 0 ? (
            <button
              className={styles.button}
              onClick={() => handleRemoveProductFromCart(product)}
            >
              Remover da sacola
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => handleAddProductToCart(product)}
            >
              Adicionar na sacola
            </button>
          )}
        </div>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
