import styled from 'styled-components'

export const Container = styled.div`
    margin: 1rem;
    width: 360px;
    padding: 1rem;
    display: flex;
    cursor: pointer;
    border-radius: 10px;
    transform: scale(0.95);
    flex-direction: column;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    :hover {
        transform: scale(1);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 16px 0px;
    }
`

export const Author = styled.a`
    padding: 2%;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 2%;
    border-radius: 5px;
    width: fit-content;
    text-decoration: none;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};

    :hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.color};
    }
`

export const Text = styled.span`
    font-size: 1.2rem;
`

export const Tags = styled.ul`
    display: flex;
    margin-top: 5%;
    list-style: none;
    margin-right: 50%;
`

export const ContainerTag = styled.a`
    padding: 3%;
    margin-right: 3%;
    border-radius: 5px;
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
    font-size: 1rem;
`