import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    height: 100%;
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerScroll = styled.ScrollView`
    height: 100%;
    background-color: ${props => props.theme.backgroundColor};
`