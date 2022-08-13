import { NextApiRequest, NextApiResponse } from 'next'
import thoughtsModel from '../../../models/thought'
import connectDB from '../../../services/connectDB'
import { IThought, IAuthor } from '../../../types'

interface IQuery {
    author: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const { author: authorName } = req.query as unknown as IQuery
        const thoughts: IThought[] = await thoughtsModel.find()
        let author: IAuthor | null = null
    
        thoughts.map(thought => {
            if (thought.author.toUpperCase() === authorName.toUpperCase()) {
                if (!author) {
                    author = {
                        name: thought.author,
                        thoughtCount: 1
                    }
                } else {
                    author.thoughtCount++
                }
            }
        })

        res.json(author ? author : { notFound: true })
    } else {
        res.status(404).end()
    }
}