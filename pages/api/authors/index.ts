import { NextApiRequest, NextApiResponse } from 'next'
import thoughtsModel from '../../../models/thought'
import connectDB from '../../../services/connectDB'
import { IThought } from '../../../types'

interface IAuthor {
    name: string
    thoughtCount: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const thoughts: IThought[] = await thoughtsModel.find()
        const authors: IAuthor[] = []
        const authorsCompare: string[] = []
    
        thoughts.map(thought => {
            if (!authorsCompare.includes(String(thought.author.toUpperCase()))) {
                authors.push({
                    name: String(thought.author),
                    thoughtCount: 1
                })

                authorsCompare.push(thought.author.toUpperCase())
            } else {
                authors.map(author => author.name === thought.author && author.thoughtCount++)
            }
        })

        res.json(authors)
    } else {
        res.status(404).end()
    }
}