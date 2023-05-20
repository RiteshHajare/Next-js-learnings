import {useRouter } from 'next/router'


function index() {
    const router = useRouter()
    const indexId = router.query.review
  
  return (
    <div>review  {indexId} </div>
  )
}

export default index