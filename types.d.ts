export interface Itheme {
    color: string
    primary: string
    secondary: string
    colorSecondary: string
    backgroundColor: string
    backgroundColorSecondary: string
}

export interface ICreated {
    date: string
    hour: string
    system: Date
}

export interface ITag {
    name: string
    count: number
    created: ICreated
}

export interface IThought {
    text: string
    author: string
    tags?: ITag[]
    created?: ICreated
}