type INavigation = {
    Home: undefined
    Login: undefined
    Settings: undefined
    ReadQRCode: undefined
    CreateGroup: undefined
    CreateThought: {
        QRCode?: string
    }
    ImportThoughts: undefined
    Thought: {
        thoughtID: string
    }
    EditThought: {
        thoughtID: string
    }
}

export default INavigation