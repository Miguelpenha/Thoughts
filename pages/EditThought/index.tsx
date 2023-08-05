import { useNavigation, useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import useModalize from '../../components/hooks/useModalize'
import modalizeMenuIcons from '../../components/modalizes/modalizeMenuIcons'
import HeaderBack from '../../components/HeaderBack'
import { Modalize } from 'react-native-modalize'
import getThought from '../../services/getThought'
import FormThought from '../../components/FormThought'
import useHandleSubmit from './useHandleSubmit'
import ContainerDefault from '../../components/ContainerDefault'

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
        <ContainerDefault>
            <HeaderBack right iconRight="qr-code-2" onPressRight={() => navigation.navigate('ReadQRCode', {
                page: 'EditThought'
            })}>
                {`Editar pensamento ${group ? `(${group})` : ''}`}
            </HeaderBack>
            <FormThought
                icon={icon}
                group={group}
                thought={thought}
                setGroup={setGroup}
                titleSubmit="Editar"
                QRCode={params.QRCode}
                onSubmit={handleSubmit}
                initialData={initialData}
                modalizeMenuIcons={modalizeMenuIconsRef.ref}
            />
            <Modalize onClosed={() => setHeight(90)} {...propsModalizeMenuIcons} {...modalizeMenuIconsProps}/>
        </ContainerDefault>
    )
}

export default EditThought