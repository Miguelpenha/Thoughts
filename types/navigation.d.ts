type INavigation = {
    Home: undefined
    Login: undefined
    Settings: undefined
    ReadQRCode: undefined
    CreateGroup: undefined
    ImportThoughts: undefined
    Group: {
        groupName: string
    }
    Thought: {
        thoughtID: string
    }
    EditThought: {
        thoughtID: string
    }
    CreateThought: {
        QRCode?: string
        groupName?: string
    }
}

export default INavigation