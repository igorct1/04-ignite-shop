import Link from 'next/link'
import * as styles from '../../styles/pages/success.css'
import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <main className={styles.successContainer}>
      <h1 className={styles.title}>Compra efetuada!</h1>

      <div className={styles.imageContainer}>
        <Image src={product.imageUrl} width={140} height={140} alt="" />
      </div>

      <p className={styles.paragraph}>
        Uhuuul!<strong> {customerName}</strong>, sua camiseta
        <strong> {product.name}</strong> já está a caminho da sua casa
      </p>

      <Link href="/" className={styles.back}>
        Voltar ao catálogo
      </Link>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  console.log(product.name)
  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
