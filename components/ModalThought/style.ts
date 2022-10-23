import styled, { keyframes, css } from 'styled-components'
import ModalNotStyled from 'react-modal'

const show = keyframes`
    0% {
        opacity: 20%;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    100% {
        opacity: 100%;
    }
`

export const Modal = styled(ModalNotStyled)`
    width: 60%;
    height: 60%;
    margin: auto;
    outline: none;
    display: flex;
    padding: 1.5%;
    border-radius: 15px;
    flex-direction: column;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: ${props => props.theme.backgroundColor};

    ${props => props.isOpen && css`
        animation: ${show} 0.5s;
    `}
`

export const ContainerAuthor = styled.a`
    width: 20%;
    display: flex;
    padding: 0.5%;
    cursor: pointer;
    align-items: center;
    border-radius: 15px;
    text-decoration: none;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    
    :hover {
        background-color: ${props => props.theme.color};

        span {
            color: ${props => props.theme.backgroundColor};
        }

        svg {
            fill: ${props => props.theme.backgroundColor};
        }
    }
`

export const IconAuthor = styled.svg`
    width: 22%;
    fill: ${props => props.theme.color};
`

export const Author = styled.span`
    margin-left: 2%;
`

export const Text = styled.span`
    margin-top: 5%;
    font-size: 1.5vw;
`

export const Tags = styled.ul`
    display: flex;
    margin-top: 5%;
    list-style: none;
    margin-top: auto;
`

export const ContainerTag = styled.a`
    padding: 1%;
    margin-right: 2%;
    border-radius: 10px;
    text-decoration: none;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};

    :hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.color};
    }
`

export const Tag = styled.li`
    font-size: 1vw;
`