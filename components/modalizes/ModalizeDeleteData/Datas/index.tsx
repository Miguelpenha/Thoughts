import { FadeInUp } from 'react-native-reanimated'
import { Container, Data } from './style'
import datas from './datas'

function Datas() {
    const handleAnimation = (index: number) => FadeInUp.delay(700+(150*index)).duration(200)

    return (
        <Container>
            {datas.map((data, index) => (
                <Data key={index} entering={handleAnimation(index)}>{data}</Data>
            ))}
        </Container>
    )
}

export default Datas