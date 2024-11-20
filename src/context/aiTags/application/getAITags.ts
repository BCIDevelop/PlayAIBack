import { AITagRepository } from "../entity/aitTag.repository";

export const getAITagsDB=async (repository:AITagRepository,offset:number,limit:number)=>{
    const records = await repository.getAITags(limit,offset)
    const count = await repository.countDocuments()
    return {count,records}
}