import { IThought, INavigation } from '../../types'
import { FC, useState } from 'react'
import useModalize from '../../components/hooks/useModalize'
import { useTheme } from 'styled-components'
import useAnimationInputSearch from './useAnimationInputSearch'
import { Container, InputSearch } from './style'
import Header from './Header'
import { FlashList } from '@shopify/flash-list'
import Thought from '../../components/Thought'
import ModalizeGroupOptionsThought from '../modalizes/ModalizeGroupOptionsThought'

interface IProps {
    group?: string
    thoughts: IThought[]
    next?: keyof INavigation
}

const ListThoughts: FC<IProps> = ({ group, thoughts, next }) => {
    const [search, setSearch] = useState('')
    const animationInputSearch = useAnimationInputSearch()
    const theme = useTheme()
    const { modalize: modalizeOptions, props: propsOptions } = useModalize(90, 70, true)
    const [thoughtSelected, setThoughtSelected] = useState<IThought>()

    function handleLongPress(item: IThought) {
        setThoughtSelected(item)
                
        modalizeOptions.open()
    }

    return (
        <Container>
            <Header group={group}/>
            <InputSearch
                value={search}
                autoCapitalize="words"
                onChangeText={setSearch}
                {...animationInputSearch}
                placeholder="Pesquisar..."
                cursorColor={theme.primary}
                selectionColor={theme.primary}
                placeholderTextColor={theme.secondaryColor}
            />
            <FlashList
                data={thoughts}
                extraData={search}
                estimatedItemSize={70}
                renderItem={({ index, item }) => {
                    if (item.name.toUpperCase().includes(search.toUpperCase())) {
                        if (group ? item.group === group : !item.group) {
                            return (
                                <Thought
                                    next={next}
                                    index={index}
                                    thought={item}
                                    onLongPress={() => handleLongPress(item)}
                                />
                            )
                        }
                    }
                }}
            />
            <ModalizeGroupOptionsThought next={next} propsOptions={propsOptions} thoughtSelected={thoughtSelected}/>
        </Container>
    )
}

export default ListThoughts