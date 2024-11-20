import { NotFound } from "../../../shared/errors";
import { AITagRepository } from "../entity/aitTag.repository";

export const getAITagByName =async (repository:AITagRepository,name:string)=>{
    const record =  await repository.getAITagByName(name)
    if (!record) throw new NotFound("Tag not Found")
        return record
}