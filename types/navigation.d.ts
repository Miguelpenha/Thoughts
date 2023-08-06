type INavigation = {
    Home: undefined
    Login: undefined
    Settings: undefined
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
    EditGroup: {
        group: name
        QRCode?: string
    }
    CreateGroup: {
        QRCode?: string
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