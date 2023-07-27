import { IThought } from '../../../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import HeaderBack from '../../../../components/HeaderBack'
import Message from './Message'

interface IProps {
    groups: string[]
    thoughts: IThought[]
    modalize: RefObject<IHandles>
}

const Header: FC<IProps> = ({ modalize, groups, thoughts }) => {
    return (
        <>
            <HeaderBack right icon="logout" onPress={modalize.current?.open}>Pensamentos</HeaderBack>
            <Message groups={groups} thoughts={thoughts}/>
        </>
    )
}

export default Header