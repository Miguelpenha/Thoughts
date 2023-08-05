type INavigation = {
    Home: undefined
    Login: undefined
    Settings: undefined
    CreateGroup: undefined
    ImportThoughts: undefined
    Group: {
        groupName: string
    }
    Thought: {
        thoughtID: string
        next: keyof INavigation
    }
    ReadQRCode: {
        page: keyof INavigation
    }
    EditThought: {
        QRCode?: string
        thoughtID: string
    }
    CreateThought: {
        QRCode?: string
        thoughtID?: string
        groupName?: string
    }
}

export default INavigation