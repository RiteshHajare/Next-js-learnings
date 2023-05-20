import Link from 'next/link'
function index() {
  return (
    <div>
      Next js first page
      <Link href='/posts' >
        Posts
      </Link>
    </div>
  )
}

export default index