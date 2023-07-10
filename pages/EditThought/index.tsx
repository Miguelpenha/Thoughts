import { useRoute } from '@react-navigation/native'
import getThought from '../../services/getThought'
import { useState, useEffect } from 'react'
import useModalize from '../../components/hooks/useModalize'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { IconMenuIcons } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Form from './Form'
import { Modalize } from 'react-native-modalize'

interface IParams {
    thoughtID: string
}

function EditThought() {
    const { thoughtID } = useRoute().params as IParams
    const thought = getThought(thoughtID)
    const [height, setHeight] = useState(90)
    const { modalize: modalizeMenuIconsRef, props } = useModalize(height, 55)
    const [icon, setIcon] = useState<string>()
    const modalizeMenuIconsProps = modalizeMenuIcons(setHeight, modalizeMenuIconsRef.ref, setIcon)

    useEffect(() => {
        if (thought && !icon) {
            setIcon(thought.icon)
        }
    }, [thought, icon])
    
    return (
        <>
            <Container>
                <HeaderBack>Editar pensamento</HeaderBack>
                <ButtonIcon onPress={() => modalizeMenuIconsRef.open()}>
                    <IconMenuIcons size={RFPercentage(5)} name={icon}/>
                </ButtonIcon>
                {thought && <Form icon={icon} thought={thought}/>}
            </Container>
            <Modalize onClosed={() => setHeight(90)} {...props} {...modalizeMenuIconsProps}/>
        </>
    )
}

export default EditThought