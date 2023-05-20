import { useRouter } from 'next/router'

function params() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params);
    return (
        <div>params page</div>
    )
}

export default params