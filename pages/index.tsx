import { IThought } from '../types'
import Head from 'next/head'
import { Container, Title, ContainerThoughts } from '../styles/pages'
import Thought from '../components/Thought'

export default function Home() {
    const thoughts: IThought[] = [
        {
            text: 'Só um pensamento, só um pensamento, só um pensamento, só um pensamento, só um pensamento.',
            author: 'Miguel Penha'
        },
        {
            text: 'Só um pensamento, só um pensamento, só um pensamento, só um pensamento, só um pensamento, só um pensamento.',
            author: 'Miguel Penha'
        },
        {
            text: 'Só um pensamento',
            author: 'Miguel Penha'
        }
    ]

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
                <title>Pensamentos</title>
            </Head>
            <Container>
                <Title>Pensamentos</Title>
                <ContainerThoughts>
                    {thoughts.map((thought, index) => <Thought key={index} thought={thought}/>)}
                </ContainerThoughts>
            </Container>
        </>
    )
}