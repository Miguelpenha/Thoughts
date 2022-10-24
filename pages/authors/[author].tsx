import { useRouter } from 'next/router'
import api from '../../services/api'
import { IAuthor, IThought } from '../../types'
import Head from 'next/head'
import ButtonBack from '../../components/ButtonBack'
import { Container, Title, Count, ContainerThoughts } from '../../styles/pages/authors/author'
import Thought from '../../components/Thought'
import ModalThought from '../../components/ModalThought'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Loading from '../../components/Loading'
import { useState } from 'react'

interface IQuery {
    author?: string
}

function Author() {
    const router = useRouter()
    const { author: authorName } = router.query as IQuery
    const { data: author } = api<IAuthor>(`/api/authors/${authorName}`)
    const [parent] = useAutoAnimate<HTMLElement>()
    const { data: thoughts } = api<IThought[]>(`/api/thoughts?author=${authorName}`)
    const [openModal, setOpenModal] = useState(false)
    const [thought, setThought] = useState<IThought>()

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Author {author?.name}</title>
            </Head>
            <Container>
                <ButtonBack/>
                {thoughts && authorName ? <>
                    <Title>{author?.name}</Title>
                    <Count>{author?.thoughtCount} pensamento{author?.thoughtCount !== 1 && 's'} desse autor</Count>
                    <ContainerThoughts ref={parent}>
                        {thoughts.map((thought, index) => (
                            <Thought key={index} thought={thought} onClick={() => {
                                setOpenModal(true)
                                setThought(thought)
                            }}/>
                        ))}
                    </ContainerThoughts>
                </> : <Loading/>}
                <ModalThought thought={thought} openModal={openModal} setOpenModal={setOpenModal}/>
            </Container>
        </>
    )
}

export default Author