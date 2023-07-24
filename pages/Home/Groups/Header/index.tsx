import { IThought } from '../../../../types'
import { IHandles } from 'react-native-modalize/lib/options'
import { FC } from 'react'
import HeaderBack from '../../../../components/HeaderBack'
import Message from './Message'

interface IProps {
    groups: string[]
    thoughts: IThought[]
    modalize: React.RefObject<IHandles>
}

const Header: FC<IProps> = ({ modalize, groups, thoughts }) => {
    return (
        <>
            <HeaderBack settings icon="logout" onPress={modalize.current?.open}>Pensamentos</HeaderBack>
            <Message groups={groups} thoughts={thoughts}/>
        </>
    )
}

export default Header