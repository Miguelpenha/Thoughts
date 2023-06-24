import { IThought } from '../../../types'
import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useOptions from './useOptions'
import { Options } from './style'
import Button from '../../buttons/Button'
import Icon from '../../Icon'
import ButtonCancel from '../../buttons/ButtonCancel'

interface IProps {
    thought: IThought
    modalize: RefObject<IHandles>
    modalizeDelete: RefObject<IHandles>
}

const ModalizeOptionsThought: FC<IProps> = ({ thought, modalize, modalizeDelete }) => {
    const options = useOptions(thought, modalize, modalizeDelete)

    return (
        <Options>
            {options.map((option, index) => {
                if (!option.type || option.type === 'primary') {
                    return (
                        <Button title={option.title} key={index} index={index} onPress={option.onPress}>
                            <Icon name={option.icon} size={35}/>
                        </Button>
                    )
                } else if (option.type === 'delete') {
                    return (
                        <ButtonCancel title={option.title} key={index} index={index} onPress={option.onPress}>
                            <Icon color="color" name={option.icon} size={35}/>
                        </ButtonCancel>
                    )
                }
            })}
        </Options>
    )
}

export default ModalizeOptionsThought