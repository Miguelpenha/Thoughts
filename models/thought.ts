import mongoose from 'mongoose'
import { IThought } from  '../types'
import created from './schemasPatterns/created'

const schema = new mongoose.Schema<IThought>({
    author: String,
    text: String,
    tags: [String],
    created
})

const thoughtsModel = mongoose.models.thought || mongoose.model<IThought>('thought', schema)

export default thoughtsModel