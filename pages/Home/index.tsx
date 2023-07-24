import useThoughts from '../../services/useThoughts'
import Container from '../../components/ContainerDefault'
import Groups from './Groups'
import Thoughts from './Thoughts'

function Home() {
    const thoughts = useThoughts()
    
    return (
        <Container scroll>
            <Groups thoughts={thoughts}/>
            <Thoughts thoughts={thoughts}/>
        </Container>
    )
}

export default Home