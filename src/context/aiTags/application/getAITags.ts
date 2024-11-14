import { AITagRepository } from "../entity/aitTag.repository";

export const getAITagsDB=async (repository:AITagRepository)=>{
    return repository.getAITags()
    
}