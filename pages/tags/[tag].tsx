import { useRouter } from 'next/router'

interface IQuery {
    tag?: string
}

function Tag() {
    const router = useRouter()
    const { tag } = router.query as IQuery

    return <h1>{tag}</h1>
}

export default Tag