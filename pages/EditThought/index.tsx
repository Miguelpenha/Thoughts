import { useNavigation, useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import useModalize from '../../components/hooks/useModalize'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { IconMenuIcons } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import SelectedGroup from './SelectedGroup'
import { Modalize } from 'react-native-modalize'
import ModalizeSelectedGroup from '../../components/modalizes/ModalizeSelectedGroup'
import getThought from '../../services/getThought'
import FormThought from '../../components/FormThought'
import useHandleSubmit from './useHandleSubmit'

interface IParams {
    QRCode?: string
    thoughtID: string
}

function EditThought() {
    const navigation = useNavigation()
    const [height, setHeight] = useState(90)
    const { modalize: modalizeMenuIconsRef, props: propsModalizeMenuIcons } = useModalize(height, 55)
    const params = useRoute().params as IParams
    const thought = getThought(params.thoughtID)
    const [icon, setIcon] = useState('book')
    const [initialData, setInitialData] = useState(true)
    const modalizeMenuIconsProps = modalizeMenuIcons(setHeight, modalizeMenuIconsRef.ref, setIcon)
    const { modalize: modalizeSelectedGroup, props: propsModalizeSelectedGroup } = useModalize(70)
    const [group, setGroup] = useState('')
    const handleSubmit = useHandleSubmit(thought && thought.id, icon, group)

    useEffect(() => {
        if (thought && initialData) {
            setIcon(thought.icon)
            setGroup(thought.group)
            setInitialData(false)
        }

        if (!params || !params.thoughtID) {
            setInitialData(false)
        }
    }, [thought, initialData])
    
    return (
        <>
            <Container>
                <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                    page: 'EditThought'
                })}>
                    {`Editar pensamento ${group ? `(${group})` : ''}`}
                </HeaderBack>
                <ButtonIcon onPress={() => modalizeMenuIconsRef.open()}>
                    <IconMenuIcons size={RFPercentage(5)} name={icon}/>
                </ButtonIcon>
                <SelectedGroup group={group} modalize={modalizeSelectedGroup.ref}/>
                {!initialData && (
                    <FormThought
                        thought={thought}
                        titleSubmit="Editar"
                        QRCode={params.QRCode}
                        onSubmit={handleSubmit}
                    />
                )}
            </Container>
            <Modalize onClosed={() => setHeight(90)} {...propsModalizeMenuIcons} {...modalizeMenuIconsProps}/>
            <Modalize ref={modalizeSelectedGroup.ref} {...propsModalizeSelectedGroup}>
                <ModalizeSelectedGroup setGroup={setGroup} modalize={modalizeSelectedGroup.ref}/>
            </Modalize>
        </>
    )
}

export default EditThought