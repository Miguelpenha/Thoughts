import { FC, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import defaultSettings from './services/defaultSettings'
import ISettingsContext from './type'
import TypesContext from './Context'
import { ISettings } from '../../types'

interface Iprops {
    children: any
}

const SettingsProvider: FC<Iprops> = ({ children }) => {
    const [settings, setSettings] = useState<ISettings>()

    useEffect(() => {
        async function verify() {
            if (!settings) {
                const settingsRaw = await AsyncStorage.getItem('@thoughts:settings')

                if (settingsRaw) {
                    const settings = JSON.parse(settingsRaw)

                    setSettings(settings)
                } else {
                    setSettings(defaultSettings)
                }
            } else {
                await AsyncStorage.setItem('@thoughts:settings', JSON.stringify(settings))
            }
        }

        verify().then()
    }, [settings])

    const value: ISettingsContext = {
        settings,
        setSettings
    }
    
    return (
        <TypesContext.Provider value={value}>
           {children}
        </TypesContext.Provider>
    )
}

export default SettingsProvider