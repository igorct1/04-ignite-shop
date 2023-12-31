import { Product } from '@/contexts/CartContext'
import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as { products: Product[] }

  //   enviar mensagem caso o method seja diferente de post
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  //   enviar mensagem caso a rota seja chamada sem o priceId
  if (!products) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',

    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
