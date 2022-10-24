import styled from 'styled-components'

export const Icon = styled.svg`
    z-index: 1;
    width: 3em;
    padding: 0.4%;
    cursor: pointer;
    position: fixed;
    border-radius: 30px;
    margin: 0.5rem 0rem;
    transition-duration: 0.1s;
    transition-timing-function: linear;
    fill: ${props => props.theme.color};

    :hover {
        background-color: ${props => props.theme.secondary};
    }
`