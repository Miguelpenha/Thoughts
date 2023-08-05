import { FC } from 'react'
import { IProps } from './type'
import useModalize from '../hooks/useModalize'
import ButtonIcon from '../buttons/ButtonIcon'
import IconMenu from '../IconMenu'
import { RFPercentage } from 'react-native-responsive-fontsize'
import SelectedGroup from './SelectedGroup'
import Form from './Form'
import { Modalize } from 'react-native-modalize'
import ModalizeSelectedGroup from '../modalizes/ModalizeSelectedGroup'

const FormThought: FC<IProps> = ({ modalizeMenuIcons, icon, group, QRCode, thought, onSubmit, initialData, titleSubmit, setGroup }) => {
    const { modalize: modalizeSelectedGroup, props: propsModalizeSelectedGroup } = useModalize(70)

    return (
        <>
            <ButtonIcon onPress={modalizeMenuIcons.current?.open}>
                <IconMenu size={RFPercentage(5)} name={icon}/>
            </ButtonIcon>
            <SelectedGroup group={group} modalize={modalizeSelectedGroup.ref}/>
            <Form
                QRCode={QRCode}
                thought={thought}
                onSubmit={onSubmit}
                initialData={initialData}
                titleSubmit={titleSubmit}
            />
            <Modalize ref={modalizeSelectedGroup.ref} {...propsModalizeSelectedGroup}>
                <ModalizeSelectedGroup setGroup={setGroup} modalize={modalizeSelectedGroup.ref}/>
            </Modalize>
        </>
    )
}

export default FormThought