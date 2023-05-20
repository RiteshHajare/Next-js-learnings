import Link from "next/link"

function ProductList() {
  return (
    <div>
      <Link href="/product/1" ><h1>Product 1</h1> </Link>
      <Link href="/product/2" replace ><h1>Product 2</h1></Link>
      <Link href="/product/3" ><h1>Product 3</h1></Link>


    </div>
  )
}

export default ProductList