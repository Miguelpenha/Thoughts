import { useRouter } from 'next/router'
import api from '../../services/api'
import { ITag } from '../../types'
import Head from 'next/head'
import { Container, Title, Count } from '../../styles/pages/tags/tag'

interface IQuery {
    tag?: string
}

function Tag() {
    const router = useRouter()
    const { tag: tagName } = router.query as IQuery
    const { data: tag } = api<ITag>(`/api/tags/${tagName}`)

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Tag {tag?.name}</title>
            </Head>
            <Container>
                <Title>{tag?.name}</Title>
                <Count>Pensamentos usando essa tag {tag?.count}</Count>
            </Container>
        </>
    )
}

export default Tag