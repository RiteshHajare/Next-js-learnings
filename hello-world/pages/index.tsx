import Link from 'next/link'
import { useRouter } from "next/router"

function index() {
  const router = useRouter()
  function handleClk() {
    console.log("yes");
    router.push("/product")

  }
  return (
    <div>
      <h1>index</h1>
      <Link href="/blog">
        Blog
      </Link>
      <Link href="/product">product </Link>
      <button onClick={handleClk}>place order</button>

    </div>
  )
}

export default index