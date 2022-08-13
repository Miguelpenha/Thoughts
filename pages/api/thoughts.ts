import { NextApiRequest, NextApiResponse } from 'next'
import thoughtsModel from '../../models/thought'
import connectDB from '../../services/connectDB'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        await connectDB()

        const thoughts = await thoughtsModel.find()
    
        res.json(thoughts)
    } else if (req.method === 'POST') {
        await connectDB()

        const { author, text, tags }: {
            author: string
            text: string
            tags: string[]
        } = req.body

        if (author && text) {
            const tagsCorrects: string[] = []

            if (tags) {
                tags.map(tag => 
                    tagsCorrects.push(tag.replace(/\s/g, '-'))
                )
            }
            
            await thoughtsModel.create({
                author,
                text,
                tags: tagsCorrects
            })

            res.json({ created: true })
        } else {
            res.json({ error: 'Missing author or text' })
        }
    } else {
        res.status(404).end()
    }
}