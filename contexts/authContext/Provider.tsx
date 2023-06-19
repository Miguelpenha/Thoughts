import { FC, useState, useEffect } from 'react'
import useLoad from './services/useLoad'
import IAuthContext from './type'
import login from './services/login'
import logout from './services/logout'
import TypesContext from './Context'

interface Iprops {
    children: any
}

const AuthProvider: FC<Iprops> = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const load = useLoad(setIsLogged)

    useEffect(() => {
        load().then()
    }, [isLogged])

    const value: IAuthContext = {
        login: (name: string, password: string) => login(name, password, setIsLogged),
        logout: () => logout(setIsLogged),
        isLogged,
    }
    
    return (
        <TypesContext.Provider value={value}>
           {children}
        </TypesContext.Provider>
    )
}

export default AuthProvider