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

export interface IThought {
    text: string
    author: string
    tags?: String[]
    created?: ICreated
}

interface IAuthor {
    name: string
    thoughtCount: number
}

interface ITag {
    name: string
    count: number
}