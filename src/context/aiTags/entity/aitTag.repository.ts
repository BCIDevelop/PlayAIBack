import { Types } from "mongoose"
import { AITag } from "./aiTag"

export type AITagRepository = {
    createAITag(aiTag:AITag):Promise<AITag>,
    deleteAITagById(id:Types.ObjectId):Promise<AITag | null>
    getAITags():Promise<AITag[] | null>

}