import { useRouter } from 'next/router'
import api from '../../services/api'
import { ITag, IThought } from '../../types'
import Head from 'next/head'
import ButtonBack from '../../components/ButtonBack'
import { Container, Title, Count, ContainerThoughts } from '../../styles/pages/tags/tag'
import Thought from '../../components/Thought'
import ModalThought from '../../components/ModalThought'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Loading from '../../components/Loading'
import { useState } from 'react'

interface IQuery {
    tag?: string
}

function Tag() {
    const router = useRouter()
    const { tag: tagName } = router.query as IQuery
    const { data } = api<{tag: ITag, thoughts: IThought[]}>(`/api/tags/${tagName}`)
    const [parent] = useAutoAnimate<HTMLElement>()
    const [openModal, setOpenModal] = useState(false)
    const [thought, setThought] = useState<IThought>()

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Author {data?.tag.name}</title>
            </Head>
            <Container>
                <ButtonBack/>
                {data?.thoughts && data?.tag ? <>
                    <Title>{data?.tag.name}</Title>
                    <Count>{data?.tag.count} pensamento{data?.tag.count !== 1 && 's'} nessa tag</Count>
                    <ContainerThoughts ref={parent}>
                        {data?.thoughts.map((thought, index) => (
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

export default Tag