import api from '../services/api'
import { IThought } from '../types'
import Head from 'next/head'
import { Container, Title, ContainerThoughts, Modal, ContainerAuthor, IconAuthor, Author, Text, Tags, ContainerTag, Tag } from '../styles/pages'
import Thought from '../components/Thought'
import { useState } from 'react'
import Link from 'next/link'


export default function Home() {
    const { data: thoughts } = api<IThought[]>('/api/thoughts')
    const [openModal, setOpenModal] = useState<IThought | null>(null)

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Pensamentos</title>
            </Head>
            <Container>
                <Title>Pensamentos</Title>
                <ContainerThoughts>
                    {thoughts && thoughts.map((thought, index) => <Thought onClick={() => setOpenModal(thought)} key={index} thought={thought}/>)}
                    <Modal
                        isOpen={openModal ? true : false}
                        onRequestClose={() => setOpenModal(null)}
                        style={{
                            overlay: { display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                        }}
                    >
                        <Link href={`authors/${openModal?.author}`} passHref>
                            <ContainerAuthor>
                                <IconAuthor xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                    <g>
                                        <rect fill="none" height="24" width="24"/>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M7.35,18.5C8.66,17.56,10.26,17,12,17 s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20S8.66,19.44,7.35,18.5z M18.14,17.12L18.14,17.12C16.45,15.8,14.32,15,12,15 s-4.45,0.8-6.14,2.12l0,0C4.7,15.73,4,13.95,4,12c0-4.42,3.58-8,8-8s8,3.58,8,8C20,13.95,19.3,15.73,18.14,17.12z"/>
                                            <path d="M12,6c-1.93,0-3.5,1.57-3.5,3.5S10.07,13,12,13s3.5-1.57,3.5-3.5S13.93,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 S11.17,8,12,8s1.5,0.67,1.5,1.5S12.83,11,12,11z"/>
                                        </g>
                                    </g>
                                </IconAuthor>
                                <Author>{openModal?.author}</Author>
                            </ContainerAuthor>
                        </Link>
                        <Text>{openModal?.text}</Text>
                        <Tags>
                            {openModal?.tags && openModal?.tags.map((tag, index) => (
                                <Link key={index} href={`tags/${tag}`} passHref>
                                    <ContainerTag>
                                        <Tag>#{tag}</Tag>
                                    </ContainerTag>
                                </Link>
                            ))}
                        </Tags>
                    </Modal>
                </ContainerThoughts>
            </Container>
        </>
    )
}