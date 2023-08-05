import { IThought, INavigation } from '../../types'
import { FC, useState } from 'react'
import useModalize from '../../components/hooks/useModalize'
import { FlashList } from '@shopify/flash-list'
import Header from './Header'
import Thought from '../../components/Thought'
import ModalizeGroupOptionsThought from '../modalizes/ModalizeGroupOptionsThought'

interface IProps {
    group?: string
    thoughts: IThought[]
    next?: keyof INavigation
}

const ListThoughts: FC<IProps> = ({ group, thoughts, next }) => {
    const { modalize: modalizeOptions, props: propsOptions } = useModalize(90, 70, true)
    const [thoughtSelected, setThoughtSelected] = useState<IThought>()

    function handleLongPress(item: IThought) {
        setThoughtSelected(item)
                
        modalizeOptions.open()
    }

    return (
        <>
            <FlashList
                data={thoughts}
                estimatedItemSize={70}
                ListHeaderComponent={<Header group={group}/>}
                renderItem={({ index, item }) => (
                    (group ? item.group === group : !item.group) && (
                        <Thought
                            next={next}
                            index={index}
                            thought={item}
                            onLongPress={() => handleLongPress(item)}
                        />
                    )
                )}
            />
            <ModalizeGroupOptionsThought next={next} propsOptions={propsOptions} thoughtSelected={thoughtSelected}/>
        </>
    )
}

export default ListThoughts