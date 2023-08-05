import useModalize, { IModalize } from '../hooks/useModalize'
import { INavigation, IThought } from '../../types'
import { FC, useState } from 'react'
import { Modalize } from 'react-native-modalize'
import ModalizeOptionsThought from './ModalizeOptionsThought'
import ModalizeQRCode from './ModalizeQRCode'
import ModalizeDeleteThought from './ModalizeDeleteThought'

interface IProps {
    propsOptions: IModalize
    next?: keyof INavigation
    thoughtSelected: IThought
}

const ModalizeGroupOptionsThought: FC<IProps> = ({ propsOptions, thoughtSelected, next }) => {
    const { modalize: modalizeQRCode, props: propsQRCode } = useModalize(90, 75, true)
    const { modalize: modalizeDelete, props: propsDelete } = useModalize(60, 0, true)
    const [positionModalizeQRCode, setPositionModalizeQRCode] = useState<'initial' | 'top'>('initial')

    return (
        <>
            <Modalize {...propsOptions}>
                <ModalizeOptionsThought
                    thought={thoughtSelected}
                    modalize={propsOptions.ref}
                    modalizeDelete={modalizeDelete.ref}
                    modalizeQRCode={modalizeQRCode.ref}
                />
            </Modalize>
            <Modalize onClosed={() => setPositionModalizeQRCode('initial')} onPositionChange={setPositionModalizeQRCode} {...propsQRCode}>
                <ModalizeQRCode position={positionModalizeQRCode} thought={thoughtSelected} modalize={modalizeQRCode.ref}/>
            </Modalize>
            <Modalize {...propsDelete}>
                <ModalizeDeleteThought next={next} thought={thoughtSelected} modalize={modalizeDelete.ref}/>
            </Modalize>
        </>
    )
}

export default ModalizeGroupOptionsThought