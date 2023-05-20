import {useRouter } from 'next/router'

function productId() {
  const router = useRouter()
  const productId = router.query.productId

  return (
    <div>detail of product {productId} </div>
  )
}

export default productId