import { useRouter } from 'next/router'
import api from '../../services/api'
import { IAuthor } from '../../types'
import Head from 'next/head'
import { Container, Title, Count } from '../../styles/pages/authors/author'

interface IQuery {
    author?: string
}

function Author() {
    const router = useRouter()
    const { author: authorName } = router.query as IQuery
    const { data: author } = api<IAuthor>(`/api/authors/${authorName}`)

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Author {author?.name}</title>
            </Head>
            <Container>
                <Title>{author?.name}</Title>
                <Count>{author?.thoughtCount}</Count>
            </Container>
        </>
    )
}

export default Author