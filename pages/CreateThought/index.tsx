import useModalize from '../../components/modalizes/useModalize'
import { useState } from 'react'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { IconMenuIcons } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Form from './Form'
import { Modalize } from 'react-native-modalize'

function CreateThought() {
    const [height, setHeight] = useState(90)
    const { modalize: modalizeMenuIconsRef, props } = useModalize(height, 55)
    const [icon, setIcon] = useState('book')
    const modalizeMenuIconsProps = modalizeMenuIcons(setHeight, modalizeMenuIconsRef.ref, setIcon)

    return (
        <>
            <Container>
                <HeaderBack>Criar pensamento</HeaderBack>
                <ButtonIcon onPress={() => modalizeMenuIconsRef.open()}>
                    <IconMenuIcons size={RFPercentage(5)} name={icon}/>
                </ButtonIcon>
                <Form icon={icon}/>
            </Container>
            <Modalize onClosed={() => setHeight(90)} {...props} {...modalizeMenuIconsProps}/>
        </>
    )
}

export default CreateThought