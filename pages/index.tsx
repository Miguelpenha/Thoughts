import { useAutoAnimate } from '@formkit/auto-animate/react'
import api from '../services/api'
import { IThought } from '../types'
import { useState } from 'react'
import Head from 'next/head'
import { Container, Title, ContainerThoughts } from '../styles/pages'
import Thought from '../components/Thought'
import Loading from '../components/Loading'
import ModalThought from '../components/ModalThought'

export default function Home() {
    const [parent] = useAutoAnimate<HTMLElement>()
    const { data: thoughts } = api<IThought[]>('/api/thoughts')
    const [openModal, setOpenModal] = useState(false)
    const [thought, setThought] = useState<IThought>()

    return (
        <>
            <Head>
                <title>Pensamentos</title>
            </Head>
            <Container>
                <Title>Pensamentos</Title>
                <ContainerThoughts ref={parent}>
                    {thoughts ? thoughts.map((thought, index) => (
                        <Thought key={index} thought={thought} onClick={() => {
                            setOpenModal(true)
                            setThought(thought)
                        }}/>
                    )) : <Loading/>}
                </ContainerThoughts>
                <ModalThought thought={thought} openModal={openModal} setOpenModal={setOpenModal}/>
            </Container>
        </>
    )
}