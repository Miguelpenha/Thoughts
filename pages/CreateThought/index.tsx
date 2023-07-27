import useModalize from '../../components/hooks/useModalize'
import { useState } from 'react'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { IconMenuIcons } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import SelectedGroup from '../../components/SelectedGroup'
import Form from './Form'
import { Modalize } from 'react-native-modalize'
import ModalizeSelectedGroup from '../../components/modalizes/ModalizeSelectedGroup'

function CreateThought() {
    const [height, setHeight] = useState(90)
    const { modalize: modalizeMenuIconsRef, props: propsModalizeMenuIcons } = useModalize(height, 55)
    const [icon, setIcon] = useState('book')
    const modalizeMenuIconsProps = modalizeMenuIcons(setHeight, modalizeMenuIconsRef.ref, setIcon)
    const [group, setGroup] = useState('')
    const { modalize: modalizeSelectedGroup, props: propsModalizeSelectedGroup } = useModalize(70)

    return (
        <>
            <Container>
                <HeaderBack right iconRight="qr-code-2" onPressRight={() => {}}>Criar pensamento</HeaderBack>
                <ButtonIcon onPress={() => modalizeMenuIconsRef.open()}>
                    <IconMenuIcons size={RFPercentage(5)} name={icon}/>
                </ButtonIcon>
                <SelectedGroup group={group} modalize={modalizeSelectedGroup.ref}/>
                <Form icon={icon} group={group}/>
            </Container>
            <Modalize onClosed={() => setHeight(90)} {...propsModalizeMenuIcons} {...modalizeMenuIconsProps}/>
            <Modalize ref={modalizeSelectedGroup.ref} {...propsModalizeSelectedGroup}>
                <ModalizeSelectedGroup setGroup={setGroup} modalize={modalizeSelectedGroup.ref}/>
            </Modalize>
        </>
    )
}

export default CreateThought