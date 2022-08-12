import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 4%;
    font-size: 2.5vw;
    text-align: center;
`

export const ContainerThoughts = styled.main`
    display: grid;
    margin-top: 5%;
    grid-template-columns: repeat(3, 1fr);
`