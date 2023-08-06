import { RefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useOptions from './useOptions'
import Button from '../../buttons/Button'
import Icon from '../../Icon'
import ButtonCancel from '../../buttons/ButtonCancel'

interface IProps {
    group: string
    modalize: RefObject<IHandles>
    modalizeDelete: RefObject<IHandles>
    modalizeQRCode: RefObject<IHandles>
}

const ModalizeOptionsGroup: FC<IProps> = ({ group, modalize, modalizeQRCode, modalizeDelete }) => {
    const options = useOptions(modalize, group, modalizeQRCode, modalizeDelete)

    return (
        <>
            {options.map((option, index) => {
                if (!option.type || option.type === 'primary') {
                    return (
                        <Button title={option.title} key={index} index={index} onPress={option.onPress}>
                            <Icon name={option.icon} size={30}/>
                        </Button>
                    )
                } else if (option.type === 'delete') {
                    return (
                        <ButtonCancel title={option.title} key={index} index={index} onPress={option.onPress}>
                            <Icon color="color" name={option.icon} size={30}/>
                        </ButtonCancel>
                    )
                }
            })}
        </>
    )
}

export default ModalizeOptionsGroup