import { RefObject, Dispatch, SetStateAction, useState } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { FlatListProps } from 'react-native'
import { useTheme } from 'styled-components'
import icons from './icons'
import ButtonIcon from '../../buttons/ButtonIcon'
import { Icon, Input } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { FadeInUp } from 'react-native-reanimated'

function modalizeMenuIcons(setHeight: Dispatch<SetStateAction<number>>, modalize: RefObject<IHandles>, setIcon: Dispatch<SetStateAction<string>>): { flatListProps: FlatListProps<any>, onClose: () => void } {
    const [filter, setFilter] = useState('')
    const theme = useTheme()
    
    return {
        onClose: () => {
            setFilter('')
        },
        flatListProps: {
            data: icons,
            numColumns: 4,
            columnWrapperStyle: {
                justifyContent: 'space-evenly'
            },
            renderItem: ({ index, item }: { index: number, item: string }) => (
                item.toUpperCase().includes(filter.toUpperCase()) && (
                    <ButtonIcon index={index/2} onPress={() => {
                        setIcon(item)

                        modalize.current.close()
                    }}>
                        <Icon size={RFPercentage(5)} name={item}/>
                    </ButtonIcon>
                )
            ),
            ListHeaderComponent: (
                <Input
                    value={filter}
                    autoCapitalize="none"
                    onChangeText={setFilter}
                    cursorColor={theme.primary}
                    onBlur={() => setHeight(90)}
                    onFocus={() => setHeight(55)}
                    selectionColor={theme.primary}
                    placeholder="Pesquisar ícone..."
                    placeholderTextColor={theme.primary}
                    entering={FadeInUp.duration(400).delay(200)}
                />
            )
        }
    }
}

export default modalizeMenuIcons