
import { AITag } from "./aiTag"

export type AITagRepository = {
    createAITag(aiTag:AITag):Promise<AITag>,
    deleteAITagById(id:string):Promise<AITag | null>
    getAITags(limit:number,offset:number):Promise<AITag[] | null>
    countDocuments():Promise<number>
    getAITagByName(name:string):Promise<AITag | null>

}