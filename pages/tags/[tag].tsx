import { useRouter } from 'next/router'
import { Container, Title } from '../../styles/pages/tags/tag'

interface IQuery {
    tag?: string
}

function Tag() {
    const router = useRouter()
    const { tag } = router.query as IQuery

    return (
        <Container>
            <Title>{tag}</Title>
        </Container>
    )
}

export default Tag