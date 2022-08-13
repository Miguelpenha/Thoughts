import { useRouter } from 'next/router'
import Head from 'next/head'
import { Container, Title } from '../../styles/pages/tags/tag'

interface IQuery {
    tag?: string
}

function Tag() {
    const router = useRouter()
    const { tag } = router.query as IQuery

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Tag {tag}</title>
            </Head>
            <Container>
                <Title>{tag}</Title>
            </Container>
        </>
    )
}

export default Tag