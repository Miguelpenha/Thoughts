interface IAuthContext {
    isLogged: boolean
    logout: () => Promise<void>
    login: (name: string, password: string) => Promise<void>
}

export default IAuthContext