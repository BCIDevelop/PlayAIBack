
import { AITagRepository } from "../entity/aitTag.repository";

export const deleteAITagsDB = async (repository: AITagRepository,id:string)=>{
    await repository.deleteAITagById(id)
}