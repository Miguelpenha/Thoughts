import { IThought } from '../../types'
import { FC, useState } from 'react'
import useModalize from '../../components/hooks/useModalize'
import { FlashList } from '@shopify/flash-list'
import Header from './Header'
import Thought from '../../components/Thought'
import Modalizes from './Modalizes'

interface IProps {
    group?: string
    thoughts: IThought[]
}

const ListThoughts: FC<IProps> = ({ group, thoughts }) => {
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
                            index={index}
                            thought={item}
                            onLongPress={() => handleLongPress(item)}
                        />
                    )
                )}
            />
            <Modalizes propsOptions={propsOptions} thoughtSelected={thoughtSelected}/>
        </>
    )
}

export default ListThoughts