import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import useModalize from '../../components/hooks/useModalize'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import Container from './Container'
import HeaderBack from '../../components/HeaderBack'
import ButtonIcon from '../../components/buttons/ButtonIcon'
import { IconMenuIcons } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import SelectedGroup from './SelectedGroup'
import Form from './Form'
import { Modalize } from 'react-native-modalize'
import ModalizeSelectedGroup from '../../components/modalizes/ModalizeSelectedGroup'
import getThought from '../../services/getThought'

interface IParams {
    QRCode?: string
    thoughtID?: string
    groupName?: string
}

function CreateThought() {
    const navigation = useNavigation()
    const [height, setHeight] = useState(90)
    const { modalize: modalizeMenuIconsRef, props: propsModalizeMenuIcons } = useModalize(height, 55)
    const params = useRoute().params as IParams
    const thought = getThought(params.thoughtID)
    const [icon, setIcon] = useState('book')
    const [initialData, setInitialData] = useState(false)
    const modalizeMenuIconsProps = modalizeMenuIcons(setHeight, modalizeMenuIconsRef.ref, setIcon)
    const { modalize: modalizeSelectedGroup, props: propsModalizeSelectedGroup } = useModalize(70)
    const [group, setGroup] = useState('')

    useEffect(() => {
        if (params) {
            if (params.groupName) {
                setGroup(params.groupName)
            }
        }
    }, [params])

    useEffect(() => {
        if (params.thoughtID) {
            if (thought && !initialData) {
                if (thought.group) {
                    setGroup(thought.group)
                }
                
                if (thought.icon) {
                    setIcon(thought.icon)
                }

                setInitialData(true)
            }
        }
    }, [params, thought])
    
    return (
        <>
            <Container>
                <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                    page: 'CreateThought'
                })}>
                    {`Criar pensamento ${group ? `(${group})` : ''}`}
                </HeaderBack>
                <ButtonIcon onPress={() => modalizeMenuIconsRef.open()}>
                    <IconMenuIcons size={RFPercentage(5)} name={icon}/>
                </ButtonIcon>
                <SelectedGroup group={group} modalize={modalizeSelectedGroup.ref}/>
                <Form initialData={initialData} setInitialData={setInitialData} thought={thought} QRCode={params && params.QRCode} icon={icon} group={group}/>
            </Container>
            <Modalize onClosed={() => setHeight(90)} {...propsModalizeMenuIcons} {...modalizeMenuIconsProps}/>
            <Modalize ref={modalizeSelectedGroup.ref} {...propsModalizeSelectedGroup}>
                <ModalizeSelectedGroup setGroup={setGroup} modalize={modalizeSelectedGroup.ref}/>
            </Modalize>
        </>
    )
}

export default CreateThought