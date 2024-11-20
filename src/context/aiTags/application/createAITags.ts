import { AITag } from "../entity/aiTag";
import { AITagRepository } from "../entity/aitTag.repository";

export const createAITagsDB = async (repository:AITagRepository,aiTag:AITag)=>{
    return await repository.createAITag(aiTag)

}