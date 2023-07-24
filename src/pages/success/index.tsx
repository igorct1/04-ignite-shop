import Link from 'next/link'
import * as styles from '../../styles/pages/success.css'

import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <main className={styles.successContainer}>
        <section className={styles.imagesContainer}>
          {products.map((product) => {
            return (
              <div className={styles.imageCard} key={product.name}>
                <Image src={product.imageUrl} width={140} height={140} alt="" />
              </div>
            )
          })}
        </section>

        <h1 className={styles.title}>Compra efetuada!</h1>

        <p className={styles.paragraph}>
          Uhuuul!<strong> {customerName}</strong>, sua compra de{' '}
          <strong>{products.length} camisetas</strong> já está a caminho da sua
          casa
        </p>

        <Link href="/" className={styles.back}>
          Voltar ao catálogo
        </Link>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // redirecionar usuario para a home o usuario tente acessar o /success sem o parametro de session_id
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name

  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product

    return {
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
