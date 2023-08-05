import useThoughts from '../../services/useThoughts'
import Container from '../../components/ContainerDefault'
import Groups from './Groups'
import ListThoughts from '../../components/ListThoughts'

function Home() {
    const thoughts = useThoughts()
    
    return (
        <Container scroll>
            <Groups thoughts={thoughts}/>
            <ListThoughts thoughts={thoughts} next="Home"/>
        </Container>
    )
}

export default Home