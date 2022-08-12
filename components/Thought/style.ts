import styled from 'styled-components'

export const Container = styled.div`
    padding: 3%;
    margin: auto;
    display: flex;
    max-width: 80%;
    cursor: pointer;
    width: fit-content;
    border-radius: 10px;
    transform: scale(0.95);
    flex-direction: column;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    :hover {
        transform: scale(1);
    }
`

export const Author = styled.span`
    font-weight: bold;
    margin-bottom: 1%;
`

export const Text = styled.span`
    
`